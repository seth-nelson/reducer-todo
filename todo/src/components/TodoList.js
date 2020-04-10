import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/titleReducer.js';
import Todo from './Todo.js'

const TodoList = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Maintenence Tasks</h2>
            <div className='task-list-container'>
                {state.map(task => {
                    return <Todo key={task.id} task={task} state={state} dispatch={dispatch} />;
                })}
            </div>
        </div>
    )
}


export default TodoList;