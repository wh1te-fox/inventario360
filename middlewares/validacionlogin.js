// Middleware que valida que el payload de login incluya usuario y contraseña con formato mínimo.
module.exports = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({ error: 'El nombre de usuario es obligatorio' });
    }
    if (!password || typeof password !== 'string' || password.length < 8) {
        return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
    }
    next();
};

