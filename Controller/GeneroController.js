import GeneroServicio from "../Services/GeneroServicio.js";

class GeneroController {
    static getAll = async (req, res) => {
        try {
            const OBJServicio = new GeneroServicio();
            const generos = await OBJServicio.getAll();
            res.status(201).json(generos);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static getById = async (req, res) => {
        try {
            const { id } = req.params;
            const OBJServicio = new GeneroServicio();
            const genero = await OBJServicio.getById(id);
            res.status(201).json(genero);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static create = async (req, res) => {
        try {
            const { genero } = req.body;
            const OBJServicio = new GeneroServicio();
            const resultado = await OBJServicio.create(genero);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static update = async (req, res) => {
        try {
            const { id } = req.params;
            const { genero } = req.body;
            const OBJServicio = new GeneroServicio();
            const resultado = await OBJServicio.update(id, genero);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static partialUpdate = async (req, res) => {
        try {
            const { id } = req.params;
            const campos = req.body;
            const OBJServicio = new GeneroServicio();
            const resultado = await OBJServicio.partialUpdate(id, campos);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const OBJServicio = new GeneroServicio();
            const resultado = await OBJServicio.delete(id);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

export default GeneroController;