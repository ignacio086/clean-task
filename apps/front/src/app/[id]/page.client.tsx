"use client";
import axios from "axios";
import { Task } from "../../schema/taskSchema";

export default function TaskEditClient({ task }) {
 const handleDelete= async()=>{
  const res = await axios.delete(`http://localhost:3000/api/task/${task.id}`).then((res)=>res.data)
  
 }
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center justify-between p-24">
      <div
        className={`w-1/2 flex flex-col justify-around rounded-xl h-96 p-8 bg-slate-800 text-white `}
        key={task.id}
      >
        <div className="flex justify-between">
          <h1 className={`${task.done ? "line-through" : ""} text-5xl`}>
            {task.title}
          </h1>
          <button
            onClick={()=>handleDelete()}
            className={`border-2 border-red-600 hover:bg-slate-600 w-auto h-12 p-2 rounded-xl text-xs`}
          >
            Eliminar
          </button>
        </div>
        <p className={`${task.done ? "line-through" : ""}`}>
          {task.description}
        </p>
      </div>
    </main>
  );
}
