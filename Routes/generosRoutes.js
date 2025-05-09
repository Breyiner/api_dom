import express from "express";
import GeneroController from "../Controller/GeneroController.js";
import { validarGenero } from "../Middlewares/validarGenero.js";

const router = express.Router();

router.get('/', GeneroController.getAll);
router.get('/:id', GeneroController.getById);

router.post('/', validarGenero, GeneroController.create);

router.put('/:id', GeneroController.update);

router.patch('/:id', GeneroController.partialUpdate);

router.delete('/:id', GeneroController.delete);

export default router;