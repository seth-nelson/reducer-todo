import React, { useState } from 'react';
import { AddTaskBtn, ClearTaskBtn, InputTaskField } from './Styles';

const TodoForm = ({ dispatch }) => {

    const [item, setItem] = useState('');

    const submitForm = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TASK',
            payload: item,
        });
        setItem('');
    };
  
    const clearCompleteTasks = e => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_COMPLETE_TASK',
        });
    };
  
    const handleChanges = e => {
        setItem(e.target.value);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <div className='task-modification-container'>
                    <InputTaskField 
                        name='add-task'
                        type='text'
                        placeholder='Enter Task'
                        value={item}
                        onChange={handleChanges} 
                    />
                    <AddTaskBtn className='hvr-grow' onClick={submitForm}>Add Task</AddTaskBtn>
                    <ClearTaskBtn className='hvr-grow' onClick={clearCompleteTasks}>Clear Completed Tasks</ClearTaskBtn>
                </div>
            </form>
        </div>
    )
}



export default TodoForm;