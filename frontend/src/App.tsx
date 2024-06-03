import { ChangeEvent, useState } from "react";
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
    <div className="max-w-md mx-auto px-2 py-2 mt-2 shadow-md shadow-gray-500 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-2">Tasks List</h2>
      <div className="flex justify-between mb-2">
        <input
          onChange={handleChange}
          className="flex-grow rouned-lg border border-gray-500 p-1 mr-4"
          type="text"
          value={task.name}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold px-2 py-1 rounded-lg shadow-md shadow-gray-700 "
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
