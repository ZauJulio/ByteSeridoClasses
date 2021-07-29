import { useContext } from "react";
import CountdownContext from "../../contexts/CountdownCtx/context";
import ButtonContdown from "../../shared/button.styles";
import "./styles.scss";

function Countdown() {
  const { time, hasActive, hasChangeAction } = useContext(CountdownContext);

  const seconds = time % 60;
  const minutes = (time - seconds) / 60;

  const secondsUnit = seconds % 10;
  const secondsDec = (seconds - secondsUnit) / 10;

  const minutesUnit = minutes % 10;
  const minutesDec = (minutes - minutesUnit) / 10;

  return (
    <div className="countdownContainer">
      <div className="containerTime">
        <div className="hours">
          <span className="timeDigit">{minutesDec}</span>
          <span className="timeDigit">{minutesUnit}</span>
        </div>
        <span className="twoPoints">:</span>
        <div className="minutesSeconds">
          <span className="timeDigit">{secondsDec}</span>
          <span className="timeDigit">{secondsUnit}</span>
        </div>
      </div>

      <div className="containerButtons">
        <ButtonContdown type="button" onClick={hasActive}>
          Start/Stop
        </ButtonContdown>

        <ButtonContdown type="button" onClick={hasChangeAction}>
          Decrease/Increase
        </ButtonContdown>
      </div>
    </div>
  );
}

export default Countdown;
