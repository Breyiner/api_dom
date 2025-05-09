import Lenguaje from "../Modules/Lenguaje.js";
import LenguajeServicio from "../Services/lenguajeServicio.js";

class LenguajeController {
    static getAll = async (req, res) => {
        try {
            const OBJServicio = new LenguajeServicio();
            const lenguajes = await OBJServicio.getAll();
            res.status(201).json(lenguajes);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static getById = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJServicio = new LenguajeServicio();
            const lenguaje = await OBJServicio.getById(id);
            res.status(201).json(lenguaje);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static create = async (req, res) => {
        try {
            const { lenguaje } = req.body;
            const OBJServicio = new LenguajeServicio();
            const resultado = await OBJServicio.create(lenguaje);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static update = async (req, res) => {
        try {
            const {id} = req.params;
            const { lenguaje } = req.body;
            const OBJServicio = new LenguajeServicio();
            const resultado = await OBJServicio.update(id,lenguaje);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static partialUpdate = async (req, res) => {
        try {
            const {id} = req.params;
            const campos = req.body;
            const OBJServicio = new LenguajeServicio();
            const resultado = await OBJServicio.partialUpdate(id,campos);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static delete = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJServicio = new LenguajeServicio();
            const resultado = await OBJServicio.delete(id);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

export default LenguajeController;