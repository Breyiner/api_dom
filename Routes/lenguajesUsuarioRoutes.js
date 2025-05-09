import express from "express";
import LenguajeUsuarioController from "../Controller/LenguajeUsuario.js";
import { validarLenguajeUsuario } from "../Middlewares/validarLenguajeUsuario.js";

const router = express.Router();

router.get('/', LenguajeUsuarioController.getAll);
router.get('/:id', LenguajeUsuarioController.getById);
router.get('/lenguaje/:id', LenguajeUsuarioController.getByLenguajeId);
router.get('/usuario/:id', LenguajeUsuarioController.getByUserId);

router.post('/', validarLenguajeUsuario, LenguajeUsuarioController.create);

router.put('/:id', LenguajeUsuarioController.update);
router.patch('/:id', LenguajeUsuarioController.partialUpdate);
router.delete('/:id', LenguajeUsuarioController.delete);
router.delete('/usuario/:id', LenguajeUsuarioController.deleteByUserId);

export default router;