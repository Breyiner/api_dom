import express from "express";
import LenguajeController from "../Controller/lenguajeController.js";

const router = express.Router();

router.get('/', LenguajeController.getAll);
router.get('/:id', LenguajeController.getById);

export default router;