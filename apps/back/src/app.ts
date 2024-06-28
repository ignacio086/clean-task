import express from "express";
import { taskRouter } from "./routes/routes";

const app = express();

app.use(express.json());

const PORT = 3005;

app.get("/ping", (_req, res) => {
  console.log("ping");
  res.json({ nombre: "juan" });
});

app.use("/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
