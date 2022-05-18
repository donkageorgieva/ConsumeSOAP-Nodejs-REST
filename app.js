import express from "express";
import convertRouter from "./routes/convetRoutes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("*", cors());

app.use("/", convertRouter);

app.listen(3001, () => {});
