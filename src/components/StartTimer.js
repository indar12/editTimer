import React, { useEffect, useRef, useState } from "react";

const StartTimer = ({ passTime }) => {
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
    <div>
      <p>
        Time Taken: {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
    </div>
  );
};

export default StartTimer;
