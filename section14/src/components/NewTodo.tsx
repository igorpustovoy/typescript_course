import React, { useRef } from "react";

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FunctionComponent<NewTodoProps> = ({ onAddTodo }) => {
    const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input id="todo-text" type="text" ref={textInputRef}/>
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
