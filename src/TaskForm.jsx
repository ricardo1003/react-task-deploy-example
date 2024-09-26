import { useState } from "react";

export function TaskForm({createTask}) {
  const [title, setTitle] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        createTask(title)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="hola"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
