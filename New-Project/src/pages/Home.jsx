import Header from '../components/Header.jsx'
import TaskInput from '../components/TaskInput.jsx';
import TaskItem from '../components/TaskItem.jsx';
const Home = () => {
    return (
        <div className="App">
            <Header />
            <TaskInput />
            <TaskItem />
        </div>
    );
};

export default Home