import React from 'react';
import TodoList from './components/TodoList.js';
import './App.css';
import { StyledAppContainer, MainBody, StyledHeader } from './components/Styles';

function App() {

  return (
    <StyledAppContainer className="app-container">
      <StyledHeader className='header'>
        <h1>Task List</h1>
      </StyledHeader>
      <MainBody className='tasklist-container'>
        <TodoList />
      </MainBody>
    </StyledAppContainer>
  );
}

export default App;
