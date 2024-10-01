import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";

function App() {
  return (
    <>
      <TaskForm></TaskForm>
      <TaskList/>
    </>
  );
}

export default App;
