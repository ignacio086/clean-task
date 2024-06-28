import { Router } from "express";
import { TaskController } from "../controller/task.controller";

export const taskRouter = Router();

taskRouter.get("/", TaskController.getAllTask);
taskRouter.get("/:id", TaskController.getOneTask);
taskRouter.post("/", TaskController.createOneTask);