import { useState, useContext } from "react";
import {TaskContext} from "../context/TaskContext"

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe un titulo"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe una descripción"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
