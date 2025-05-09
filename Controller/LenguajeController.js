import Lenguaje from "../Modules/Lenguaje.js";

class LenguajeController {
    static getAllLenguajes = async (req, res) => {
        const OBJLenguaje = new Lenguaje();
        const lenguajes = await OBJLenguaje.getAll();
        res.json(lenguajes);
    }
}

export default LenguajeController;