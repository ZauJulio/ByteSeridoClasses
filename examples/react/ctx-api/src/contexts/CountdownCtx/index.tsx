import { useEffect, useState } from "react";
import CountdownCtx from "./context";

interface CountdownProviderProps {
  children: React.ReactNode;
}

function CountdownProvider(props: CountdownProviderProps) {
  const [time, setTime] = useState(25 * 60);

  const handleTime = {
    decrease: () => {
      if (time > 0) {
        setTime(time - 1);
      }
    },
    increase: () => {
      setTime(time + 1);
    },
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleTime.decrease();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [time]);

  return (
    <CountdownCtx.Provider value={{ time }}>
      {props.children}
    </CountdownCtx.Provider>
  );
}

export default CountdownProvider;
