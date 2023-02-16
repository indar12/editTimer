import { ActionTypes } from "../actionTypes/actionTypes";

export const showTodo = (todos) => {
    return {
        type: ActionTypes.SHOW_TODO,
        payload: todos
    };
};

export const addTodo = (todo) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: todo
    };
};

export const deleteTodo = (todo) => {
    return {
        type: ActionTypes.DELETE_TODO,
        payload: todo
    };
};