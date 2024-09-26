import { Fragment } from "react";
import TaskCard from "./TaskCard";
// import { useState, useEffect } from "react";

function TaskList({ tasks }) {
  if (tasks.lenght === 0) {
    return <h1>añade algo pe</h1>;
  }

  return (
    <Fragment key={"10"}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </Fragment>
  );
}

export default TaskList;
