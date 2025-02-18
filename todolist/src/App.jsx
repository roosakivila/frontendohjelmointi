import { useState } from 'react'
import './App.css'

function App() {

  const [desc, setDesc] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const addTodos = () => {
    console.log("Lisätään todo");
    setTodos([...todos, desc]);
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
    </>
  )
}

export default App
