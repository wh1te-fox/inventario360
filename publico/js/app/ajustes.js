// Módulo de ajustes (stub mínimo para evitar errores de importación)
// Exporta funciones globales que la UI puede llamar.

// Función que lee los campos del panel de ajustes y persiste una copia local en el navegador.
window.guardarAjustes = function() {
    try {
        const nombreEmpresa = document.getElementById('nombreEmpresa')?.value || '';
        const moneda = document.getElementById('moneda')?.value || '';
        const notificaciones = !!document.getElementById('notificaciones')?.checked;
        const ajustes = { nombreEmpresa, moneda, notificaciones };
        localStorage.setItem('ajustesInventario360', JSON.stringify(ajustes));
        alert('Ajustes guardados');
    } catch (e) {
        console.warn('Error guardando ajustes:', e);
        alert('No se pudo guardar ajustes');
    }
};

// Función placeholder que notifica que la exportación aún no está implementada.
window.exportarDatos = function() {
    alert('Función de exportar datos no implementada aún');
};

// Función que pide confirmación y limpia el almacenamiento local para simular un reset.
window.confirmarReset = function() {
    if (confirm('¿Seguro que deseas restablecer el sistema? Esto eliminará datos locales.')) {
        localStorage.clear();
        alert('Sistema restablecido (local)');
        window.location.reload();
    }
};

export default {};
