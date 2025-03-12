import React from "react";
import { useState, useRef } from 'react'
import TodoTable from "./TodoTable.jsx";

export default function TodoList({ todos, setTodos }) {

    const [desc, setDesc] = useState({ description: '', date: '', priority: '' });
    const gridRef = useRef();

    const addTodos = () => {
        console.log("Lisätään todo");
        setTodos([...todos, desc]);
        setDesc({ description: "", date: "", priority: "" });
    }

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select a row first!');
        }
    };

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
                    type="date"
                    name='date'
                    id='date'
                    placeholder='Syötä päivämäärä'
                    value={desc.date}
                    onChange={(event) => setDesc({ ...desc, date: event.target.value })}
                />
                <label htmlFor='priority'>Priority: </label>
                <input
                    type="text"
                    name='priority'
                    id='priority'
                    placeholder='Syötä tärkeys'
                    value={desc.priority}
                    onChange={(event) => setDesc({ ...desc, priority: event.target.value })}
                />
                <button onClick={addTodos}>Add</button>
                <button onClick={handleDelete}>Delete</button>

            </div>
            <TodoTable todos={todos} gridRef={gridRef} />
        </>
    );

}

