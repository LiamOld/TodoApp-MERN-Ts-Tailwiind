import Task from "./Task";
import { tasktype } from "./App";

interface TasksProps {
  tasks: tasktype[];
  onClick: (index: number) => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, onClick }) => {
  return (
    <>
      {tasks.map((task: tasktype, index: number) => (
        <Task task={task} onClick={() => onClick(index)}></Task>
      ))}
    </>
  );
};

export default Tasks;
