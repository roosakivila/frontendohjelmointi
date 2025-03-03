import React from 'react';


export default function TodoTable({ todos, deleteTask }) {
    return (
        <div>
            <table id="list">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((task, index) => (
                        <tr key={index}>
                            <td>{task.date}</td>
                            <td>{task.description}</td>
                            <td><button onClick={() => deleteTask(index)}>Delete</button></td>
                        </tr>))}
                </tbody>
            </table>
        </div>
    )

}