import "./ToDoList.scss";
import ToDoNew from "../ToDoNew/ToDoNew";
import ToDoTask from "../ToDoTask/ToDoTask";
import { useState } from "react";
//deleteall, axios, showerror
const ToDoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: Date.now(),
      isChecked: false,
      text: "todoshka 1",
      isEditing: false,
    },
  ]);

  const addNewTask = (text) =>
    setTasks([
      ...tasks.concat([
        {
          id: Date.now(),
          isChecked: false,
          text,
          isEditing: false,
        },
      ]),
    ]);

  const markAsChecked = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              id: task.id,
              isChecked: !task.isChecked,
              text: task.text,
              isEditing: task.isEditing,
            }
          : task
      )
    );

  const deleteOneTask = (id) =>
    setTasks(tasks.filter((task) => task.id !== id));

  const editOneTask = (id) =>
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isEditing = true;
        }

        return task;
      })
    );

  const cancelChanges = (id) =>
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isEditing = false;
        }

        return task;
      })
    );

    const applyChanges = (id, text) => {
      setTasks(tasks.map(task => {
        if (task.id === id) {
          task.text = text;
          task.isEditing = false;
        }

        return task;
      }))
    }

  const anythingIsEditing = !tasks.every((task) => !task.isEditing);

  const sortedTasks = [...tasks].sort((a, b) =>
    a.isChecked === b.isChecked ? 0 : a.isChecked ? 1 : -1
  );

  return (
    <div className="container">
      <h1 className="container__title">To-Do-Shka</h1>
      <ToDoNew createNewTask={addNewTask} />
      {sortedTasks.map((task) => (
        <ToDoTask
          anythingIsEditing={anythingIsEditing}
          key={task.id}
          task={task}
          onCheckboxChange={markAsChecked}
          onDeleteClick={deleteOneTask}
          onEditClick={editOneTask}
          onApplyClick={applyChanges}
          onCancelClick={cancelChanges}
        />
      ))}
    </div>
  );
};

export default ToDoList;
