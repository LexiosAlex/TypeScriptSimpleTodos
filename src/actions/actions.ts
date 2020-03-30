import {iTodo} from '../interfaces/interfaces';
import {ADD_TODO, AppActions, REMOVE_TODO, TOGGLE_TODO} from "../interfaces/actions";

export const addTodo = (todo: iTodo): AppActions => ({
  type: ADD_TODO,
  todo
});

export const toggleTodo = (id: number): AppActions => ({
  type: TOGGLE_TODO,
  id
});



export const removeTodo = (id: number): AppActions => ({
  type: REMOVE_TODO,
  id
});