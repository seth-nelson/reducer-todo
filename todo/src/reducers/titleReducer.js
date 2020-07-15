var moment = require('moment');

export const initialState = [
    {
        item: 'Wash Car',
        completed: false,
        id: 9061,
        timeCompleted: ''
    },
    // {
    //     item: 'Change Oil',
    //     completed: false,
    //     id: 9062,
    //     timeCompleted: ''
    // },
    // {
    //     item: 'Vacuum Carpet',
    //     completed: false,
    //     id: 9063,
    //     timeCompleted: ''
    // }
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                    { 
                        item: action.payload,
                        completed: false,
                        id: Date.now(),
                        timeCompleted: ''
                    }
            ];
        case "TOGGLE_COMPLETE_TASK":
            return state.map(task => {
                    if (task.id === action.payload) {
                        return {...task, completed: !task.completed, timeCompleted: moment().format('MMMM Do YYYY, h:mm a')};
                    } else {
                return task;
            }});
        case "CLEAR_COMPLETE_TASK":
            return state.filter(task => !task.completed);
        default:
            return state;
    }
};