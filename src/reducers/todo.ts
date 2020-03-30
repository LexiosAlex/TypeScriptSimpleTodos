import { iTodo } from "../interfaces/interfaces";
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TodoActionTypes
} from "../interfaces/actions";

const initialState: iTodo[] = [];

export default (state = initialState, action: TodoActionTypes): iTodo[] => {

  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);

    default:
      return state;
  }
};
