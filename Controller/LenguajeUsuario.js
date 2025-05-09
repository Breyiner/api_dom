import LenguajeUsuarioServicio from "../Services/LenguajeUsuarioServicio.js";

class LenguajeUsuarioController {
    static getAll = async (req, res) => {
        try {
            const OBJServicio = new LenguajeUsuarioServicio();
            const lenguajesUsuarios = await OBJServicio.getAll();
            res.status(201).json(lenguajesUsuarios);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static getById = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJServicio = new LenguajeUsuarioServicio();
            const lenguajeUsuario = await OBJServicio.getById(id);
            res.status(201).json(lenguajeUsuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static getByUserId = async (req, res) => {
        try {
            const {id} = req.params;
            
            const OBJServicio = new LenguajeUsuarioServicio();
            const usuario = await OBJServicio.getByUserId(id);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static getByLenguajeId = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJServicio = new LenguajeUsuarioServicio();
            const lenguaje = await OBJServicio.getByLenguajeId(id);
            res.status(201).json(lenguaje);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static create = async (req, res) => {
        try {
            const { id_usuario, id_lenguaje } = req.body;
            const OBJServicio = new LenguajeUsuarioServicio();
            const resultado = await OBJServicio.create(id_usuario, id_lenguaje);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static update = async (req, res) => {
        try {
            const {id} = req.params;
            const { id_usuario, id_lenguaje } = req.body;
            const OBJServicio = new LenguajeUsuarioServicio();
            const resultado = await OBJServicio.update(id,id_usuario, id_lenguaje);
            
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static partialUpdate = async (req, res) => {
        try {
            const {id} = req.params;
            const campos = req.body;
            const OBJServicio = new LenguajeUsuarioServicio();
            const resultado = await OBJServicio.partialUpdate(id,campos);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static delete = async (req, res) => {
        try {
            const {id} = req.params;
            const OBJServicio = new LenguajeUsuarioServicio();
            const resultado = await OBJServicio.delete(id);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static deleteByUserId = async (req, res) => {
        try {
            const { id } = req.params;
            const OBJServicio = new LenguajeUsuarioServicio();
            const resultado = await OBJServicio.deleteByUserId(id);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}
export default LenguajeUsuarioController;