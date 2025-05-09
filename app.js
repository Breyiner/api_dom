import express from "express";
import bodyParser from "body-parser";

import lenguajesRoutes from "./routes/lenguajesRoutes.js";

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({ "extended": true }));

app.use("/lenguajes", lenguajesRoutes);

app.listen(3000, () => {
  console.log("Servidor en funcionamiento...");
});