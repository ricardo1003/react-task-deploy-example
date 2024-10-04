import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-10 mb-4 max-w-md mx-auto"
    >
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe un titulo"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe una descripción"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button
        className="bg-indigo-500 px-3 py-1 text-white"
      >Guardar</button>
    </form>
  );
}

export default TaskForm;
