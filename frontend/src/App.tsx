import { ChangeEvent, useState } from "react";
import Task from "./Task";
import Tasks from "./Tasks";

export type tasktype = {
  name: string;
  done: boolean;
};

const App = () => {
  const [tasks, setTasks] = useState<tasktype[]>([
    { name: "first", done: false },
    { name: "second", done: true },
    { name: "third", done: true },
  ]);

  const [task, setTask] = useState<tasktype>({
    name: "new task",
    done: false,
  });

  const handleClick = () => {
    if (!task.name) {
      return;
    }
    const newtasks = tasks.concat(task);
    setTasks(newtasks);
    setTask({ name: "", done: false });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const taskname = e.target.value;
    const newtask = { name: taskname, done: false };
    setTask(newtask);
  };

  const handleCheck = (i: number) => {
    const newtasks = tasks.map((task, index) => {
      if (index == i) {
        return { name: task.name, done: !task.done };
      }
      return task;
    });
    setTasks(newtasks);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl">Tasks List</h2>
      <div>
        <input
          onChange={handleChange}
          className="border border-gray-700"
          type="text"
          value={task.name}
        />
        <button
          onClick={handleClick}
          className="bg-gray-300 border border-gray-700 ml-3"
        >
          Add
        </button>
      </div>
      <ul>
        <Tasks tasks={tasks} onClick={handleCheck} />
      </ul>
    </div>
  );
};

export default App;
