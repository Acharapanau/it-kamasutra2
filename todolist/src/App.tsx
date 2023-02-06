import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

const App = () => {
    //Bll
    const todoListTitle: string = "What to learn"
    const tasks: Array<TaskType> = [
        {id: 1, title: "Html & CSS", isDone: true},
        {id: 2, title: "ES6 & TS", isDone: true},
        {id: 3, title: "REACT & REDUX", isDone: false},


    ]
    //UI
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks}/>
        </div>
    );
}


export default App;
