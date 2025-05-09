import Lenguaje from "../Modules/Lenguaje.js";

class LenguajeController {
    static getAll = async (req, res) => {
        try {
            const OBJLenguaje = new Lenguaje();
            const lenguajes = await OBJLenguaje.getAll();
            res.status(201).json(lenguajes);
        } catch (error) {
            res.status(500).json({ error: "Se ha presentado un error al obtener los lenguajes." });
        }
    }

    static getById = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJLenguaje = new Lenguaje();
            const lenguaje = await OBJLenguaje.getById(id);
            res.status(201).json(lenguaje);
        } catch (error) {
            res.status(500).json({ error: "Se ha presentado un error al obtener el lenguaje." });
        }
    }
}

export default LenguajeController;