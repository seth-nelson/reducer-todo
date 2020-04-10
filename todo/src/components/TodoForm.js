import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/titleReducer.js';

const TodoForm = () => {

    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TASK',
            payload: task,
        });
        setTask('');
    };
  
    const clearCompleteTasks = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETE_TASK',
        });
    };
  
    const handleChanges = e => {
        setTask(e.target.value);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <div className='add-task-container'>
                    <input 
                        name='add-task'
                        onChange={handleChanges} 
                    />
                    <button className='add-btn'>Add Task</button>
                    <button className='clr-completed-btn' onClick={clearCompleteTasks}>Clear Completed Tasks</button>
                </div>
            </form>
        </div>
    )
}



export default TodoForm;