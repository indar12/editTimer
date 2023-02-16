import React, { useEffect, useRef, useState } from "react";
import { FaTimes, FaEdit, FaPauseCircle, FaPlay } from "react-icons/fa";
import StartTimer from "./StartTimer";

const TaskItem = ({ task, onDelete, editFunc }) => {
  const [passTime, setPassTime] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  let timer = useRef();
  useEffect(() => {
    handleTime();
    if (passTime) {
      console.log("pass", passTime);
      return clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  });
  function handleTime() {
    timer.current = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 59) {
        setHours(hours + 1);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
  }
  return (
    <div className="task">
      <div>
        <h3>{task.taskName} </h3>
        <p>Expected Time: {task.expectedTime}</p>
        <StartTimer passTime={passTime} />
      </div>
      <div className="taskIcons">
        <div>
          <FaTimes
            onClick={() => onDelete(task.id)}
            style={{ color: "red", cursor: "pointer" }}
          />
          <div onClick={() => editFunc(task.id)}>
            <FaEdit />
          </div>
          <div
            onClick={() => {
              console.log("passTime", passTime);
              setPassTime(!passTime);
            }}
          >
            {passTime?<FaPlay/>:<FaPauseCircle />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
