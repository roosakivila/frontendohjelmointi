import React from "react";
import { useState } from 'react'
import TodoTable from "./TodoTable.jsx";

export default function TodoList({ todos, setTodos }) {

    const [desc, setDesc] = useState({ description: '', date: '' });

    const addTodos = () => {
        console.log("Lisätään todo");
        setTodos([...todos, desc]);
        setDesc({ description: "", date: "" });
    }

    const deleteTask = (index) => {
        setTodos(todos.filter((desc, i) => i !== index));
    }

    return (
        <>
            <h1>Simple Todolist</h1>
            <div id="addtodo">
                <p id="add">Add todo:</p>
                <label htmlFor='description'>Description: </label>
                <input
                    type="text"
                    name='description'
                    id='description'
                    placeholder='Syötä kuvaus'
                    value={desc.description}
                    onChange={(event) => setDesc({ ...desc, description: event.target.value })}
                />
                <label htmlFor='date'>Date: </label>
                <input
                    type="text"
                    name='date'
                    id='date'
                    placeholder='Syötä päivämäärä'
                    value={desc.date}
                    onChange={(event) => setDesc({ ...desc, date: event.target.value })}
                />
                <button onClick={addTodos}>Add</button>
            </div>
            <TodoTable todos={todos} deleteTask={deleteTask} />
        </>
    );

}

