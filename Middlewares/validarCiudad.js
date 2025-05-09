export const validarCiudad = (req, res, next) => {
    const { ciudad } = req.body;

    if (!ciudad || ciudad.trim() === "") {
        return res.status(400).json({ mensaje: "La ciudad es obligatoria." });
    }

    next();
}