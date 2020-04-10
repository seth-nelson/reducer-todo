import React from 'react';


const Todo = (props) => {

    return (
        <div className='todo-container'>
            <h3>{props.task.item}</h3>
        </div>
    )
}


export default Todo;