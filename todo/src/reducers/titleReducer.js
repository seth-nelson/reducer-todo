const tasks = [
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


export const initialState = {
    title: 'title from reducer',
    editing: false
};

export const titleReducer = (state, action) => {
    if (action.type === "TOGGLE_EDITING") {
        return {
            ...state,
            editing: !state.editing
        };
    } else if (action.type === "UPDATE_TITLE") {
        return {
            ...state,
            title: action.payload,
            editing: false
        };
    }
    return state;
}