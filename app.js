import express from "express";
import bodyParser from "body-parser";

import lenguajesRoutes from "./routes/lenguajesRoutes.js";
import generosRoutes from "./Routes/generosRoutes.js";

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }));

app.use("/lenguajes", lenguajesRoutes);
app.use("/generos", generosRoutes);

app.listen(3000, () => {
  console.log("Servidor en funcionamiento...");
});