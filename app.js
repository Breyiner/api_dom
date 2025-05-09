import express from "express";
import bodyParser from "body-parser";

import lenguajesRoutes from "./routes/lenguajesRoutes.js";
import generosRoutes from "./Routes/generosRoutes.js";
import ciudadesRoutes from "./Routes/ciudadesRoutes.js";
import usuariosRoutes from "./Routes/usuariosRoutes.js";

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }));

app.use("/lenguajes", lenguajesRoutes);
app.use("/generos", generosRoutes);
app.use("/ciudades", ciudadesRoutes);
app.use("/usuarios", usuariosRoutes);

app.listen(3000, () => {
  console.log("Servidor en funcionamiento...");
});