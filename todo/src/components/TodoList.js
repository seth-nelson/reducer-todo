import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/titleReducer.js';
import TodoForm from './TodoForm.js';
import Todo from './Todo.js'
import { TasksContainer } from './Styles';

const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {/* <h2>Maintenence Tasks</h2> */}
            <div className='page-body'>
                <TodoForm dispatch={dispatch} />
                <TasksContainer className='task-list-container'>
                    {state.map(task => {
                        return <Todo key={task.id} task={task} dispatch={dispatch} />
                    })}
                </TasksContainer>
            </div>
        </div>
    )
}


export default TodoList;