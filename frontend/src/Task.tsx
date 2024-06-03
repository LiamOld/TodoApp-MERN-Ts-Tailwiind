import { tasktype } from "./App";

interface TaskProps {
  task: tasktype;
  onClick: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onClick }) => {
  return (
    <div className="border-b py-2">
      <input type="checkbox" checked={task.done} onClick={onClick}></input>
      {task.name}
    </div>
  );
};

export default Task;
