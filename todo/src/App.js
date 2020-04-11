import React from 'react';
import TodoList from './components/TodoList.js';
import './App.css';
import { StyledAppContainer, TasklistContainer, StyledHeader } from './components/Styles';

function App() {

  return (
    <StyledAppContainer className="app-container">
      <StyledHeader className='header'>
        <h1>Auto Tasks</h1>
      </StyledHeader>
      <TasklistContainer className='tasklist-container'>
        <TodoList />
      </TasklistContainer>
    </StyledAppContainer>
  );
}

export default App;
