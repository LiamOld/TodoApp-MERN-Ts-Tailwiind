import { tasktype } from "./App";

interface TaskProps {
  task: tasktype;
  onClick: (index: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, onClick }) => {
  return (
    <div>
      <input type="checkbox" checked={task.done} onClick={onClick}></input>
      {task.name}
    </div>
  );
};

export default Task;
