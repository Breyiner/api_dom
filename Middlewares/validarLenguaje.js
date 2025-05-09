export const validarLenguaje = (req, res, next) => {
    const { lenguaje } = req.body;
  
    if (!lenguaje || lenguaje.trim() === "") return res.status(400).json({ mensaje: "El lenguaje es obligatorio." });
  
    next();
}