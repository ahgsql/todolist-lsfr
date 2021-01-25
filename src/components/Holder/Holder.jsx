import React from 'react';
import './Holder.scss'
import { useSubscribe, freshState, writeState, readState } from 'local-state-for-react';
import Todo from '../todo/todo'
freshState({ todoname: "" })
const addTodo = (todoname) => {
    let id = Math.floor(Math.random() * 1000)
    let list = readState('todolist')
    if (!Array.isArray(list)) {
        list = []
    }
    list.push({ id, title: todoname })
    writeState("todolist", list)
}
const Holder = () => {
    const { todoname, todolist } = useSubscribe("todoname", "todolist")
    return (
        <div className="wrapper">
            <header>Todo App</header>
            <div className="inputField">
                <input
                    onChange={(e) => writeState("todoname", e.target.value)}
                    type="text" placeholder="Add your new todo" value={todoname} />
                <button type="button" onClick={() => addTodo(todoname)}>+</button>
            </div>
            <ul className="todoList">
                {
                    todolist && todolist.map(element => {
                        return <Todo key={element.id} id={element.id} title={element.title} />
                    })
                }

            </ul>

        </div >
    )
}
export default Holder;