function TaskCard({ task, deleteTask }) {
  return (
    <section>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>eliminar tarea</button>
    </section>
  );
}

export default TaskCard;
