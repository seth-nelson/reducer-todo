const tasks = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
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