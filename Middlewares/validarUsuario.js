export const validarUsuario = (req, res, next) => {
    const { nombre, apellido, documento, telefono, usuario, contrasena, id_genero, id_ciudad } = req.body;

    if (!nombre || nombre.trim() === "") return res.status(400).json({ mensaje: "El nombre es obligatorio." });

    if (!apellido || apellido.trim() === "") return res.status(400).json({ mensaje: "El apellido es obligatorio." });

    if (!documento || documento.trim() === "") return res.status(400).json({ mensaje: "El documento es obligatorio." });

    if (!telefono || telefono.trim() === "") return res.status(400).json({ mensaje: "El teléfono es obligatorio." });

    if (!usuario || usuario.trim() === "") return res.status(400).json({ mensaje: "El usuario es obligatorio." });

    if (!contrasena || contrasena.trim() === "") return res.status(400).json({ mensaje: "La contraseña es obligatoria." });

    if (!id_genero) return res.status(400).json({ mensaje: "El ID del género es obligatorio." });
    
    if (!id_ciudad) return res.status(400).json({ mensaje: "El ID del ciudad es obligatorio." });

    next();
}