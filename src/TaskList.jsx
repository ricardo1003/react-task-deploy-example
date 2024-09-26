import { Fragment } from "react";
// import { useState, useEffect } from "react";

function TaskList({ tasks }) {
  if (tasks.lenght === 0) {
    return <h1>añade algo pe</h1>;
  }

  return (
    <Fragment key={"10"}>
      {tasks.map((task) => (
        <section key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </section>
      ))}
    </Fragment>
  );
}

export default TaskList;
