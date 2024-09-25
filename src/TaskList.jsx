import { Fragment } from "react";
import { tasks as data } from "./tasks";
import { useState, useEffect } from "react";

function TaskList() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    setTasks(data);
  }, []);

  if (data.lenght === 0) {
    return <h1>añade algo pe</h1>;
  }

  return (
    <Fragment>
      {data.map((task) => (
        <section key={task.id}>
          <h1>Tarea</h1>
          <p>{task.description}</p>
        </section>
      ))}
    </Fragment>
  );
}

export default TaskList;
