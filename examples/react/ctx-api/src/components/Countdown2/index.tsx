import "./styles.scss";

interface Countdown2Props {
  time: number;
}

function Countdown2(props: Countdown2Props) {
  const seconds = props.time % 60;
  const minutes = (props.time - seconds) / 60;

  const secondsUnit = seconds % 10;
  const secondsDec = (seconds - secondsUnit) / 10;

  const minutesUnit = minutes % 10;
  const minutesDec = (minutes - minutesUnit) / 10;

  return (
    <div className="container2">
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
  );
}

export default Countdown2;
