const express = require('express');
const router = express.Router();
const db = require('../db');

// Devuelve clientes y suma de créditos pendientes para armar dashboards de cobranza
router.get('/', (_req, res) => {
  const sql = `
    SELECT c.*, COALESCE(t.total_credito, 0) AS total_credito
    FROM clientes c
    LEFT JOIN (
      SELECT cliente_id, SUM(COALESCE(monto, 0)) AS total_credito
      FROM movimientos
      WHERE cliente_id IS NOT NULL AND tipo = 'venta' AND COALESCE(es_credito, 0) = 1
      GROUP BY cliente_id
    ) t ON t.cliente_id = c.id
    ORDER BY c.id DESC`;

  db.all(sql, [], (err, rows = []) => {
    if (err) return res.status(500).json({ error: 'Error leyendo clientes' });
    const totalClientes = rows.length;
    const totalPorCobrar = rows.reduce((acc, row) => acc + (Number(row.total_credito) || 0), 0);
    res.json({ clientes: rows, resumen: { totalClientes, totalPorCobrar } });
  });
});

// Registra un cliente nuevo y responde con el registro completo
router.post('/', (req, res) => {
  const { nombre, direccion, telefono, email } = req.body;
  if (!nombre) return res.status(400).json({ error: 'nombre es requerido' });
  db.run('INSERT INTO clientes (nombre, direccion, telefono, email) VALUES (?, ?, ?, ?)', [nombre, direccion || null, telefono || null, email || null], function (err) {
    if (err) return res.status(500).json({ error: 'Error creando cliente' });
    db.get('SELECT * FROM clientes WHERE id = ?', [this.lastID], (e, row) => {
      if (e) return res.status(500).json({ error: 'Creado pero no se pudo leer' });
      res.json({ cliente: row });
    });
  });
});

// Modifica los datos de contacto de un cliente determinado por ID
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, direccion, telefono, email } = req.body;
  db.run('UPDATE clientes SET nombre = ?, direccion = ?, telefono = ?, email = ? WHERE id = ?', [nombre || null, direccion || null, telefono || null, email || null, id], function (err) {
    if (err) return res.status(500).json({ error: 'Error actualizando cliente' });
    if (this.changes === 0) return res.status(404).json({ error: 'Cliente no encontrado' });
    db.get('SELECT * FROM clientes WHERE id = ?', [id], (e, row) => {
      if (e) return res.status(500).json({ error: 'Error leyendo cliente' });
      res.json({ cliente: row });
    });
  });
});

// Borra el cliente indicado e informa si no existía
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM clientes WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: 'Error eliminando cliente' });
    if (this.changes === 0) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ mensaje: 'Cliente eliminado' });
  });
});

module.exports = router;
