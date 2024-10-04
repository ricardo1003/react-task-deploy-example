import { Fragment } from "react";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  console.log(tasks[0])
  if (tasks[0] === undefined) {
    return <h1 className="text-white text-4xl font-bold text-center">añade algo pe</h1>;
  }

  return (
    <div key={"10"} className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
