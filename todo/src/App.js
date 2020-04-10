import React from 'react';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import './App.css';


function App() {

  return (
    <div className="App">
      <div className='header'>
        <h1>Car Maintenence Tasks</h1>
        <TodoForm />
      </div>
      <div className='car-tasklist'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
