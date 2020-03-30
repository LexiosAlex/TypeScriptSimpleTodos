import {createStore, combineReducers} from "redux";

import todosReducer from '../reducers/todo';

export const rootReducer = combineReducers({
  todos: todosReducer
});

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);