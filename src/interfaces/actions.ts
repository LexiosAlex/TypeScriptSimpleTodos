import { iTodo } from "./interfaces";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface addTodo {
  type: typeof ADD_TODO;
  todo: iTodo;
}

export interface removeTodo {
  type: typeof REMOVE_TODO;
  id: number;
}

export interface toggleTodo {
  type: typeof TOGGLE_TODO;
  id: number
}

export type TodoActionTypes = addTodo | removeTodo | toggleTodo;

export type AppActions = TodoActionTypes;
