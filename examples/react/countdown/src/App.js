import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [time, setTime] = useState(25 * 60);

  const seconds = time % 60;
  const hours = (time - seconds) / 60;

  const secondsUnit = seconds % 10;
  const secondsDec = (seconds - secondsUnit) / 10;

  const hoursUnit = hours % 10;
  const hoursDec = (hours - hoursUnit) / 10;

  useEffect(() => {
    setTimeout(() => setTime(time - 1), 1000);
  }, [time]);


  return (
    <div className="App">
      <div className="container">
        <div className="hours">
          <span className="timeDigit">{hoursDec}</span>
          <span className="timeDigit">{hoursUnit}</span>
        </div>
        <span className="twoPoints">:</span>
        <div className="minutesSeconds">
          <span className="timeDigit">{secondsDec}</span>
          <span className="timeDigit">{secondsUnit}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
