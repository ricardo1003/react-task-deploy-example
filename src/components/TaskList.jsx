import { Fragment } from "react";
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.lenght === 1) {
    return <h1>añade algo pe</h1>;
  }

  return (
    <Fragment key={"10"}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Fragment>
  );
}

export default TaskList;
