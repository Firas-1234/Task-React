import '../styles/TaskInput.css';

const TaskInput = () => {
  return (
    <div className="task-input">
      <h1>Input Field Sederhana</h1>
      <input type="text" placeholder="Tulis sesuatu..." />
      <button>Submit</button>
    </div>
  );
};

export default TaskInput;
