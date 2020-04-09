import React from 'react';

const TodoForm = ({dispatch}) => {

    const [todo, setTodo] = useState('');

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
                        onChange={handleChanges} value={item} 
                    />
                    <button className='add-btn'>Add Task</button>
                </div>
                <div className='clr-complete-btn-container'>
                    <button className='clr-completed-btn' onClick={clearCompleteTasks}>Clear Completed Tasks</button>
                </div>
            </form>
        </div>
    )
}



export default TodoForm;