import { useState } from 'react'
import { AppBar, CssBaseline, Toolbar, Typography, Tabs, Tab, Box, Container } from '@mui/material';
import TodoList from './components/TodoList.jsx';

function App() {

  const [todos, setTodos] = useState([]);

  const [tabIndex, setTabIndex] = useState(0);

  // Handle tab change
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  return (
    <>

      <CssBaseline />
      <AppBar position="static" sx={{ width: "100vw" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="Todos" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Box sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
      }}>
        {tabIndex === 0 && (

          <Typography variant="h4" mt={4}>
            Welcome to My Todo App! 🎉
          </Typography>
        )}
        {tabIndex === 1 && <TodoList todos={todos} setTodos={setTodos} />}
      </Box>

    </>
  )
}

export default App
