import React, { useState } from 'react';

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
                <div className='add-task-container'>
                    <input 
                        name='add-task'
                        type='text'
                        value={item}
                        onChange={handleChanges} 
                    />
                    <button className='add-btn' onClick={submitForm}>Add Task</button>
                    <button className='clr-completed-btn' onClick={clearCompleteTasks}>Clear Completed Tasks</button>
                </div>
            </form>
        </div>
    )
}



export default TodoForm;