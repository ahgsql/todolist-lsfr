import React from 'react';
import './todo.scss'
import { readState, writeState } from 'local-state-for-react';
const deleteItem = (id) => {
    console.log(id);
    let list = readState('todolist')
    let newlist = list.filter((list) => list.id !== id)
    writeState("todolist", newlist)
}

const Todo = ({ title, id }) => (
    <li>{title}<span className="icon" onClick={() => deleteItem(id)}>X</span></li>
)
export default Todo;