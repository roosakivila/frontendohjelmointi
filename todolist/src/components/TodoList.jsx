import React from "react";
import { useState, useRef } from 'react';
import { Button, Stack, TextField } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
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
            <Stack mt={2} mb={2} direction="row" spacing={2} justifyContent="center"
                alignItems="center">
                <TextField variant='standard'
                    label='Description'
                    onChange={(event) => setDesc({ ...desc, description: event.target.value })}
                    value={desc.description}
                />
                <TextField variant='standard'
                    label='Date'
                    onChange={(event) => setDesc({ ...desc, date: event.target.value })}
                    value={desc.date}
                />
                <TextField variant='standard'
                    label='Priority'
                    onChange={(event) => setDesc({ ...desc, priority: event.target.value })}
                    value={desc.priority}
                />
                <Button variant="outlined" onClick={addTodos}>Add</Button>
                <Button variant="outlined" color="error" endIcon={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
            </Stack>

            <TodoTable todos={todos} gridRef={gridRef} />
        </>
    );

}

