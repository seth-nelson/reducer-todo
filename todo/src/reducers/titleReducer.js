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


export const titleReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                item: action.payload,
                completed: false,
                id: (Math.random() * Math.random()).toString(9).substr(2, 9)
            };
        case "TOGGLE_COMPLETE_TASK":
            return state.map(task => {
                    if (task.id === action.payload) {
                        return {...task, complete: !task.complete};
                    }
                return task;
                });
        case "CLEAR_COMPELTE_TASK":
            return state.filter(task => {
                    return !task.complete;
                });
        default:
            return state;
    }
};