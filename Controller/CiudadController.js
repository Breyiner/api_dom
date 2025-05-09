import CiudadServicio from "../Services/CiudadServicio.js";

class CiudadController {
    static getAll = async (req, res) => {
        try {
            const OBJServicio = new CiudadServicio();
            const ciudades = await OBJServicio.getAll();
            res.status(201).json(ciudades);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static getById = async (req, res) => {
        try {
            const { id } = req.params;
            const OBJServicio = new CiudadServicio();
            const ciudad = await OBJServicio.getById(id);
            res.status(201).json(ciudad);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static create = async (req, res) => {
        try {
            const { ciudad } = req.body;
            const OBJServicio = new CiudadServicio();
            const resultado = await OBJServicio.create(ciudad);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static update = async (req, res) => {
        try {
            const { id } = req.params;
            const { ciudad } = req.body;
            const OBJServicio = new CiudadServicio();
            const resultado = await OBJServicio.update(id, ciudad);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static partialUpdate = async (req, res) => {
        try {
            const { id } = req.params;
            const campos = req.body;
            const OBJServicio = new CiudadServicio();
            const resultado = await OBJServicio.partialUpdate(id, campos);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.params;
            const OBJServicio = new CiudadServicio();
            const resultado = await OBJServicio.delete(id);
            res.status(201).json(resultado);
        } catch (error) {
            res.status(500).json({ mensaje: error.message });
        }
    }
}

export default CiudadController;