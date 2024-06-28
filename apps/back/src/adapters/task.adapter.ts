import { arrTask } from "../utils/bdd";

export class TaskAdapter {
  static getTask() {
    const tasks: Task[] = arrTask.map((task) => {
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        done: task.done,
      };
    });
    return tasks;
  }
  static getOne(id: number) {
    const task = arrTask.find((task) => task.id === id);
    if (!task) return null;
    const formatedTask: Task = {
      id: task.id,
      title: task.title,
      description: task.description,
      done: task.done,
    };
    return formatedTask;
  }
  static addOne(task: any) {
    const formatedTask: TaskServer = {
      id: task.id,
      title: task.title,
      description: task.description,
      done: task.done,
    };
    arrTask.push(formatedTask);
  }
}
