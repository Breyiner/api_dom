import express from "express";
import CiudadController from "../Controller/CiudadController.js";
import { validarCiudad } from "../Middlewares/validarCiudad.js";

const router = express.Router();

router.get('/', CiudadController.getAll);
router.get('/:id', CiudadController.getById);

router.post('/', validarCiudad, CiudadController.create);

router.put('/:id', CiudadController.update);

router.patch('/:id', CiudadController.partialUpdate);

router.delete('/:id', CiudadController.delete);

export default router;
