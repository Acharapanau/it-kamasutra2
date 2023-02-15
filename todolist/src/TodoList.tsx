import React, {ChangeEvent, FC, Ref, RefObject, useRef, useState} from 'react';
import TasksList from "./TasksList";
import {FilterValuesType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    changeFilterValue: (filter: FilterValuesType) => void
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList: FC<TodoListPropsType> = (props): JSX.Element => {
    const [title, setTitle] = useState<string>("")
    // const addTaskInput: RefObject<HTMLInputElement> = useRef(null)
    // const addTask = () => {
    //   if(addTaskInput.current) {
    //       props.addTask(addTaskInput.current.value)
    //       addTaskInput.current.value = ""
    //   }
    // }
    const changeLocalTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    const setAllFilterValue = () => props.changeFilterValue("all")
    const setAllFilterActive = () => props.changeFilterValue("active")
    const setAllFilterCompleted = () => props.changeFilterValue("completed")

    const onKeyDownTask = (e: React.KeyboardEvent) => e.key === "Enter" && addTask()
    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        }
        setTitle("")
    }

    return (
        <div className={"todolist"}>
            <h3>{props.title}</h3>
            <div>
                {/*<input ref={addTaskInput}/>*/}
                {/*<button onClick={addTask}>+</button>*/}
                <input
                    value={title}
                    onChange={changeLocalTitle}
                    onKeyDown={onKeyDownTask}
                />

                <button disabled={title.trim().length === 0} onClick={addTask}>+</button>
                {title.length > 15 && <div style={{color: "hotpink"}}>Task title is to long!</div>}
            </div>
            <TasksList tasks={props.tasks} removeTask={props.removeTask}/>
            <div>
                <button onClick={setAllFilterValue}>All</button>
                <button onClick={setAllFilterActive}>Active</button>
                <button onClick={setAllFilterCompleted}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;