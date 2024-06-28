import { TaskAdapter } from "../adapters/task.adapter";

export class TaskController{
    static async getAllTask(_req,res){
        const tasks = await TaskAdapter.getTask()
        return tasks
    }
    static async getOneTask(req, res){
        const id = req.params.id
        const task = await TaskAdapter.getOne(id)
        return task
    }
    static async createOneTask(req, res){
        const task = req.body
        const newTask = await TaskAdapter.addOne(task)
        return newTask
    }
}