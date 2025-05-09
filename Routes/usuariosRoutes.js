import express from "express";
import UsuarioController from "../Controller/UsuarioController.js";
import { validarUsuario } from "../Middlewares/validarUsuario.js";

const router = express.Router();

router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);

router.post('/', validarUsuario, UsuarioController.create);

router.put('/:id', validarUsuario, UsuarioController.update);
router.patch('/:id', UsuarioController.partialUpdate);
router.delete('/:id', UsuarioController.delete);

export default router;