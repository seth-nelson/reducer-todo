import React from 'react';
import { StyledDate, TaskContainer } from './Styles';


const Todo = ({dispatch, task}) => {

    const toggleComplete = () => {
        dispatch({
            type: 'TOGGLE_COMPLETE_TASK',
            payload: task.id
        })
    }

    return (
        <TaskContainer className='hvr-underline-from-left' onClick={toggleComplete}>
            <h3>{task.item} <StyledDate>{task.timeCompleted}</StyledDate></h3>
        </TaskContainer>
    )
}


export default Todo;