import "./ToDoNew.scss";
import Button from "../Button/Button";
import { useState } from "react";

const ToDoNew = ({ createNewTask }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      createNewTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="toDoNew" onSubmit={submitHandler}>
      <input
        type="text"
        value={inputValue}
        className="toDoNew__input"
        placeholder="Enter Your Task"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button appearence="add" />
    </form>
  );
};

export default ToDoNew;
