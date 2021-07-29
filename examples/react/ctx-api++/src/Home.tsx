import React from "react";

import Countdown from "./components/Countdown";

import CountdownProvider from "./contexts/CountdownCtx";

import "./styles/App.css";

function Home() {
  return (
    <div className="App">
      <CountdownProvider>
        <Countdown />
      </CountdownProvider>
    </div>
  );
}

export default Home;
