import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

const reducers = combineReducers({
    allTodos: todoReducer,
})

export default reducers;