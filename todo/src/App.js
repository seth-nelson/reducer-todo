import React from 'react';
import TodoList from './components/TodoList.js';
import './App.css';


function App() {

  return (
    <div className="App">
      <div className='header'>
        <h1>Car Maintenence Tasks</h1>
      </div>
      <div className='tasklist-container'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
