import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { iTodo } from "../interfaces/interfaces";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as iTodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: iTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setTodos(prevState => [newTodo, ...prevState]);
  };

  const toggleHandler = (id: number) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};

export default TodosPage;
