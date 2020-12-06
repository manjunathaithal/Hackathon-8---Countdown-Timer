import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [currentTime, setTime] = useState(0);
  let id = 0;
  const timer = (event) => {
    if (event.keyCode === 13) {
      setTime(event.target.value);
      clearInterval(id);
    }
  };
  const updatetimer = () => {
    let value = currentTime;
    if (currentTime != 0) {
      id = setTimeout(() => {
        setTime(currentTime - 1);
      }, 1000);
    }
  };

  useEffect(() => {
    updatetimer();
  }, [currentTime]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(event) => timer(event)}
            type="number"
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  );
};

export default App;
