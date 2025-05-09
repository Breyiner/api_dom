import express from "express";
import LenguajeController from "../Controller/lenguajeController.js";

const router = express.Router();

router.get('/', LenguajeController.getAllLenguajes);

export default router;