import React from 'react';


const Todo = ({dispatch, task}) => {

    const toggleComplete = () => {
        dispatch({
            type: 'TOGGLE_COMPLETE_TASK',
            payload: task.id
        })
    }

    return (
        <div className='todo-container' onClick={toggleComplete}>
            <h3>{task.item} <span>{task.timeCompleted}</span></h3>
        </div>
    )
}


export default Todo;