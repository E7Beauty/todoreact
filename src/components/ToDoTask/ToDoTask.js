import { useState } from "react";
import Button from "../Button/Button";
import "./ToDoTask.scss";

const ToDoTask = ({
  task,
  anythingIsEditing,
  onCheckboxChange,
  onDeleteClick,
  onEditClick,
  onApplyClick,
  onCancelClick,
}) => {
  const { isChecked, text, isEditing, id } = task;
  const [updatedValue, setUpdatedValue] = useState(text);

  const pClassName = isChecked ? "task__text task__text_completed" : "task__text";

  const updateTaskHandler = (event) => {
    event.preventDefault();
    if (updatedValue.trim()) {
      onApplyClick(id, updatedValue);
      setUpdatedValue("");
    }
  };

  return (
    <>
      {isEditing ? (
        <form className="task" onSubmit={updateTaskHandler}>
          <input
            type="checkbox"
            className="task__checkbox"
            checked={isChecked}
            disabled={anythingIsEditing}
            onChange={() => onCheckboxChange(task.id)}
          />
          <input
            type="text"
            className="task__text task__text_input"
            value={updatedValue}
            onChange={(event) => setUpdatedValue(event.target.value)}
          />
          <div className="taskActions">
            <Button appearence="apply" />
            <Button appearence="cancel" id={task.id} action={onCancelClick} />
          </div>
        </form>
      ) : (
        <div className="task">
          <input
            type="checkbox"
            className="task__checkbox"
            checked={isChecked}
            disabled={anythingIsEditing}
            onChange={() => onCheckboxChange(task.id)}
          />
          <p className={pClassName}>{text}</p>
          <div className="taskActions">
            <Button
              appearence="edit"
              id={task.id}
              action={onEditClick}
              disabled={anythingIsEditing || isChecked}
            />
            <Button
              appearence="delete"
              id={task.id}
              action={onDeleteClick}
              disabled={anythingIsEditing}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ToDoTask;
