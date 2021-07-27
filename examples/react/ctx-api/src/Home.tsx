import React, { useEffect, useState } from "react";

import Countdown from "./components/Countdown";
import Countdown2 from "./components/Countdown2";

import CountdownProvider from "./contexts/CountdownCtx";

import "./styles/App.css";

function Home() {
  const [time, setTime] = useState(25 * 60);

  useEffect(() => {
    setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  
  return (
    <div className="App">
      <CountdownProvider>
        <Countdown />
      </CountdownProvider>

      <Countdown2 time={time}/>
    </div>
  );
}

export default Home;
