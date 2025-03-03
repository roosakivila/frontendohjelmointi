import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList.jsx';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
