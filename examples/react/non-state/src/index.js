import React from "react";
import ReactDOM from "react-dom";

const TimeOut = () => {
  var time = 0;

  const increment = () => {
    time++;
    console.log(time);
  };

  setInterval(increment, 500);

  return <h1>{time}</h1>;
};

ReactDOM.render(<TimeOut />, document.getElementById("root"));
