
import { Task } from "../../schema/taskSchema";
import TaskEditClient from "./page.client";

export const dynamic = "force-dynamic";
async function getData(id: number) {
  const res:TaskWeb = await fetch (`http://localhost:3000/api/task/${id}`)
    .then((res:any) => res.json()).then(data=>data);
  return res;
}

export default async function taskEdit({ params }:any) {
  let task:any= await getData(params.id);

  return (
    <div>
      <TaskEditClient task={task[0]} />
    </div>
  );
}
