import React, { useState, useRef } from "react";

interface iTodoFormProps {
  onAdd(title:string):void
}

const TodoForm: React.FC<iTodoFormProps> = props => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
      // ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // ref={ref}
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active" placeholder="Todo">
        Enter your todo here
      </label>
    </div>
  );
};

export default TodoForm;
