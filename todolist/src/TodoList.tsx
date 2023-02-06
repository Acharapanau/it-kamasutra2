import React from 'react';
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div className={"todolist"}>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <TasksList tasks={props.tasks}/>
            <div>
                <button>ALL</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
};
export default TodoList;