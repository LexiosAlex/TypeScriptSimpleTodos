import React from "react";
import TodoForm from "../components/TodoForm";
import { AppState } from "../store/mainStore";
import { TodoList } from "../components/TodoList";
import { iTodo } from "../interfaces/interfaces";
import { addTodo, removeTodo, toggleTodo } from "../actions/actions";
import { connect } from "react-redux";

interface HomePageState {
  todos: iTodo[];
  addTodo(todo: iTodo): void;
  removeTodo(id: number): void;
  toggleTodo(id: number): void;
}

const TodosPage: React.FC<HomePageState> = ({
  todos,
  removeTodo,
  toggleTodo,
  addTodo
}) => {
  const addHandler = (title: string) => {
    const newTodo: iTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };

    addTodo(newTodo);
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />

      <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);
