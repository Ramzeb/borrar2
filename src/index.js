import express from "express";
import { PORT } from "./config.js";
import storeRoutes from "./routes/store.routes.js";

const app = express();

app.use(express.json());
app.use(storeRoutes);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);
