import '../styles/TaskInput.css';
import { useState } from 'react';

const TaskInput = ({ setData, data }) => {
    // useState
    const [inputValue, setInputValue] = useState('');
    // tipedata
    // integer/Number
    // string
    // boolean

    // jsx untuk menggabungkan javascript dan html didalam react
    const handleSubmit = () => { // arrow function
        if (inputValue == '') {
            alert('input tidak boleh kosong');
        }

    const newTask = {
        id: data.length + 1,
        title: inputValue
    };

    // ... (spread operator)
    setData([...data, newTask]);
    
    }
const handleInput = (event) => {
            setInputValue(event.target.value);
        }


    return (
        <div className="task-input">
            <h1>Input Field Sederhana</h1>
            <input onChange={handleInput} type="text" placeholder="Tulis sesuatu..." />
            <button onClick={handleSubmit}> Submit</button>
        </div>
    );
};

export default TaskInput;
