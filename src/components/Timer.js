import Header from "./Header";
import Tasks from "./Tasks";
import React, { useState } from "react";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions/action";

const Timer = () => {
  const todos = useSelector((state)=>state.allTodos.todos);
  const dispatch = useDispatch();
  console.log(todos);
  const [editTaskId, setEditTaskId] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [expectedTime, setExpectedTime] = useState("");
  const [tasks, setTasks] = useState(todos);
  const title = "Timer App";
  //add new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    dispatch(addTodo([...tasks, newTask]));
  };
  //delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
  function editFunc(id) {
    const selectedValue = tasks.find((item)=>item.id===id)
    setTaskName(selectedValue.taskName);
    setExpectedTime(selectedValue.expectedTime)
    setEditTaskId(id);
    setShowAddTask(true);
  }
  function editTaskFunc(task) {
    setTasks(
      tasks.map((item) => {
        if (item.id === editTaskId) {
          return task;
        }
        return item;
      })
    );
  }
  return (
    <div className="container">
      <Header
        title={title}
        onToggle={() => {
          setShowAddTask(!showAddTask);
        }}
        showAddClose={showAddTask}
      />
      {showAddTask && (
        <AddTask
          onAdd={addTask}
          tasks={tasks}
          taskName={taskName}
          setTaskName={setTaskName}
          expectedTime={expectedTime}
          setExpectedTime={setExpectedTime}
          editTaskFunc={editTaskFunc}
          editTaskId={editTaskId}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} editFunc={editFunc} />
      ) : (
        "No Task"
      )}
    </div>
  );
};

export default Timer;
