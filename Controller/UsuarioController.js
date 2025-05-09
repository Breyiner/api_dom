import UsuarioServicio from "../Services/UsuarioServicio.js";

class UsuarioController {
    static getAll = async (req, res) => {
        try {
            const OBJServicio = new UsuarioServicio();
            const usuarios = await OBJServicio.getAll();
            res.status(201).json(usuarios);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static getById = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJServicio = new UsuarioServicio();
            const usuario = await OBJServicio.getById(id);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static create = async (req, res) => {
        try {
            const campos = req.body;
            const OBJServicio = new UsuarioServicio();
            const usuario = await OBJServicio.create(campos);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static update = async (req, res) => {
        try {
            const {id} = req.params;
            const campos = req.body;
            const OBJServicio = new UsuarioServicio();
            const resultado = await OBJServicio.update(id,campos);
            
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static partialUpdate = async (req, res) => {
        try {
            const {id} = req.params;
            const campos = req.body;
            const OBJServicio = new UsuarioServicio();
            const resultado = await OBJServicio.partialUpdate(id,campos);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static delete = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJServicio = new UsuarioServicio();
            const resultado = await OBJServicio.delete(id);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

export default UsuarioController;