import React, { useState } from 'react';
import Header from '../components/Header.jsx'
import TaskInput from '../components/TaskInput.jsx';
import TaskItem from '../components/TaskItem.jsx';
import TaskTest from '../components/TaskTest.jsx';
const Home = () => {    
    const [data, setData] = useState(
        [
            {
                id: 1,
                title: "belajar react"
            }, 
            {
                id: 2,
                title: "makan"
            },
            {
                id: 3,
                title: "tidur"
            }
        ]
    );

console.log(data);
return (
        <div className="App">
            <Header />
            <TaskInput setData={setData} data={data} />
            <TaskItem data={data} setData={setData} />    
            <TaskTest />
        </div>
);
};

export default Home