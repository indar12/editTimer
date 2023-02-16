import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, onDelete, editFunc }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={onDelete}
          editFunc={editFunc}
        />
      ))}
    </>
  );
};

export default Tasks;
