export const initialState = [
    {
        item: 'wash car',
        completed: false,
        id: 9061
    },
    {
        item: 'change oil',
        completed: false,
        id: 9062
    },
    {
        item: 'vacuum carpet',
        completed: false,
        id: 9063
    }
];


export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                    { 
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }
            ];
        case "TOGGLE_COMPLETE_TASK":
            return state.map(task => {
                    if (task.id === action.payload) {
                        return {...task, completed: !task.completed};
                    } else {
                return task;
            }});
        case "CLEAR_COMPLETE_TASK":
            return state.filter(task => !task.completed);
        default:
            return state;
    }
};