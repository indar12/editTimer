import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      taskName: "Frontent",
      expectedTime: "0.5",
    },
  ],
};

export const todoReducer = (state=initialState, { type, payload }) => {
  console.log("payload",payload);
  switch (type) {
    case ActionTypes.SHOW_TODO:
      return{
        ...state,todos:payload
      }
    case ActionTypes.ADD_TODO:
      return {
        ...state,todos:payload
      };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
      };
    default:
      return state;
  }
};
