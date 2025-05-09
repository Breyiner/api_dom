export const validarGenero = (req, res, next) => {
    const { genero } = req.body;

    if (!genero || genero.trim() === "") {
        return res.status(400).json({ mensaje: "El género es obligatorio." });
    }

    next();
}