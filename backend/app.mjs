import express from "express";

export const app = express();
import route from "./src/routes/api.mjs";

app.use("/", route);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((error, req, res, next) => {
  res.status(500).send("Something broke!");
});
