const express = require('express');
const router = express.Router();
const db = require('../db');
const VALID_RANGOS = new Set(['dia', 'semana', 'mes', 'año']);

// Convierte distintas representaciones de fecha en un objeto Date válido
function parseFechaFiltro(value) {
  if (!value) return null;
  const isoMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [, y, m, d] = isoMatch;
    return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
  }
  const localMatch = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (localMatch) {
    const [, d, m, y] = localMatch;
    return new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
  }
  const parsed = Date.parse(value);
  if (!Number.isNaN(parsed)) return new Date(parsed);
  return null;
}

// Ajusta la fecha al inicio del periodo indicado para comparar rangos
function alignToPeriodo(date, rango) {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  switch (rango) {
    case 'semana': {
      const day = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 1 - day);
      return d;
    }
    case 'mes':
      d.setUTCDate(1);
      return d;
    case 'año':
      d.setUTCMonth(0, 1);
      return d;
    case 'dia':
    default:
      return d;
  }
}

// Suma unidades de periodo completas a una fecha dada respetando UTC
function addPeriodo(date, amount, rango) {
  const d = new Date(date.getTime());
  switch (rango) {
    case 'semana':
      d.setUTCDate(d.getUTCDate() + (amount * 7));
      break;
    case 'mes':
      d.setUTCMonth(d.getUTCMonth() + amount);
      break;
    case 'año':
      d.setUTCFullYear(d.getUTCFullYear() + amount);
      break;
    case 'dia':
    default:
      d.setUTCDate(d.getUTCDate() + amount);
      break;
  }
  return d;
}

// Registra movimientos de inventario/finanzas y actualiza stock si corresponde
router.post('/', (req, res) => {
  const { tipo, producto_id, cantidad, monto, descripcion, cliente_id, proveedor_id, es_credito } = req.body;
  if (!tipo || (tipo === 'venta' && (!producto_id || !cantidad))) {
    return res.status(400).json({ error: 'tipo y (producto_id,cantidad) para venta son requeridos' });
  }

  if (tipo === 'gasto' && (!monto || Number(monto) <= 0)) {
    return res.status(400).json({ error: 'El monto del gasto es obligatorio' });
  }

  const esCredito = (tipo === 'venta' && Number(es_credito)) ? 1 : 0;

  // Si es venta y no se indicó monto calculamos usando el precio actual
  const doInsertMovimiento = (finalMonto) => {
    db.run(
      'INSERT INTO movimientos (tipo, producto_id, cantidad, monto, descripcion, fecha, cliente_id, proveedor_id, es_credito) VALUES (?, ?, ?, ?, ?, strftime("%s","now"), ?, ?, ?)',
      [tipo, producto_id || null, cantidad || 0, finalMonto || 0, descripcion || null, cliente_id || null, proveedor_id || null, esCredito],
      function (err) {
        if (err) return res.status(500).json({ error: 'Error registrando movimiento' });
        res.json({ mensaje: 'Movimiento registrado', id: this.lastID });
      }
    );
  };

  if (tipo === 'venta') {
    // Leer producto para obtener precio y existencia
    db.get('SELECT existencia, precio FROM productos WHERE id = ?', [producto_id], (err, row) => {
      if (err) return res.status(500).json({ error: 'Error leyendo producto' });
      if (!row) return res.status(404).json({ error: 'Producto no encontrado' });
      if (row.existencia < cantidad) return res.status(400).json({ error: 'Stock insuficiente' });

      const finalMonto = monto || (row.precio * cantidad);

      // Actualizar existencia
      db.run('UPDATE productos SET existencia = existencia - ? WHERE id = ?', [cantidad, producto_id], function (uerr) {
        if (uerr) return res.status(500).json({ error: 'Error actualizando stock' });
        doInsertMovimiento(finalMonto);
      });
    });
  } else if (tipo === 'gasto') {
    doInsertMovimiento(monto);
  } else {
    // Otros tipos: egreso/ajuste sólo insertan movimiento (puede afectar stock si se desea)
    if (tipo === 'egreso' && producto_id && cantidad) {
      // disminuir stock también
      db.run('UPDATE productos SET existencia = existencia - ? WHERE id = ?', [cantidad, producto_id], function (uerr) {
        if (uerr) return res.status(500).json({ error: 'Error actualizando stock' });
        doInsertMovimiento(monto);
      });
    } else {
      doInsertMovimiento(monto);
    }
  }
});

// Lista movimientos con filtros opcionales por tipo, producto y rango temporal
router.get('/', (req, res) => {
  const { tipo, producto_id, fechaBase, rango } = req.query;
  let rangoFiltro = null;
  if (fechaBase) {
    const baseDate = parseFechaFiltro(fechaBase);
    if (baseDate && !Number.isNaN(baseDate.valueOf())) {
      const rangoValido = VALID_RANGOS.has(rango) ? rango : 'dia';
      const inicio = alignToPeriodo(baseDate, rangoValido);
      const fin = addPeriodo(inicio, 1, rangoValido);
      rangoFiltro = {
        start: Math.floor(inicio.getTime() / 1000),
        end: Math.floor(fin.getTime() / 1000)
      };
    }
  }
  let sql = 'SELECT m.*, p.nombre as producto, c.nombre as cliente, pr.nombre as proveedor FROM movimientos m LEFT JOIN productos p ON m.producto_id = p.id LEFT JOIN clientes c ON m.cliente_id = c.id LEFT JOIN proveedores pr ON m.proveedor_id = pr.id';
  const params = [];
  const where = [];
  if (tipo) { where.push('m.tipo = ?'); params.push(tipo); }
  if (producto_id) { where.push('m.producto_id = ?'); params.push(producto_id); }
  if (rangoFiltro) {
    where.push('m.fecha >= ? AND m.fecha < ?');
    params.push(rangoFiltro.start, rangoFiltro.end);
  }
  if (where.length) sql += ' WHERE ' + where.join(' AND ');
  sql += ' ORDER BY fecha DESC LIMIT 500';
  db.all(sql, params, (err, rows) => {
    if (err) return res.status(500).json({ error: 'Error leyendo movimientos' });
    res.json({ movimientos: rows });
  });
});

// Calcula totales vendidos por producto y cifras generales de ingresos/egresos
router.get('/estadisticas/resumen', (req, res) => {
  const sql = `SELECT p.id, p.nombre, SUM(m.cantidad) as total_unidades, SUM(m.monto) as total_monto
                FROM movimientos m
                JOIN productos p ON m.producto_id = p.id
                WHERE m.tipo = 'venta'
                GROUP BY p.id, p.nombre
                ORDER BY total_monto DESC`;
  db.all(sql, [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Error calculando estadísticas' });
    // totales generales
    db.get("SELECT SUM(monto) as total_ingresos, SUM(CASE WHEN tipo='egreso' THEN monto ELSE 0 END) as total_egresos FROM movimientos", [], (e, totals) => {
      if (e) return res.status(500).json({ error: 'Error calculando totales' });
      res.json({ resumen: rows, totales: totals });
    });
  });
});

module.exports = router;
