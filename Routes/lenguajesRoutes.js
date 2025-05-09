import express from "express";
import LenguajeController from "../Controller/lenguajeController.js";
import { validarLenguaje } from "../Middlewares/validarLenguaje.js";

const router = express.Router();

router.get('/', LenguajeController.getAll);
router.get('/:id', LenguajeController.getById);

router.post('/', validarLenguaje, LenguajeController.create);

router.put('/:id', LenguajeController.update);
router.patch('/:id', LenguajeController.partialUpdate);
router.delete('/:id', LenguajeController.delete);

export default router;