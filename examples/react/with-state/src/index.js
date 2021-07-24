import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const TimeOut = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => setTime(time + 1), 1000);
  }, [time]);

  return <h1>{time}</h1>;
};

ReactDOM.render(<TimeOut />, document.getElementById("root"));
