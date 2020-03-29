import React from "react";
import { iTodo } from "../interfaces/interfaces";

type TodoListProps = {
  todos: iTodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle
}) => {
  if (todos.length === 0) {
    return <p>There is no todos</p>;
  }
  return (
    <ul>
      {todos.map(todoItem => {
        const classes = ["todo"];

        if (todoItem.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={`todo-${todoItem.id}`}>
            <label>
              <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => {
                  onToggle(todoItem.id);
                }}
              />
              <span>{todoItem.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(todoItem.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
