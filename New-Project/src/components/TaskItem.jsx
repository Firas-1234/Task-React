import '../styles/TaskItem.css';

const TaskItem = () => {
  return (
    <div className="task-item">
      <h3>Tugas Hari Ini</h3>
      <label>
        Belajar React
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default TaskItem;
