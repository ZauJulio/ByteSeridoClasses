import { useEffect, useState } from "react";
import CountdownCtx from "./context";

interface CountdownProviderProps {
  children: React.ReactNode;
}

type ChangeAction = {
  action: "decrease" | "increase";
};

function CountdownProvider(props: CountdownProviderProps) {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);
  const [changeAction, setChangeAction] = useState<ChangeAction>({
    action: "decrease",
  });
  
  const hasActive = () => setActive(!active);

  const hasChangeAction = () => {
    if (changeAction.action === "increase") {
      setChangeAction({ action: "decrease" });
    } else {
      setChangeAction({ action: "increase" });
    }
  };

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
      if (active) {
        if (changeAction.action === "decrease") {
          handleTime.decrease();
        } else {
          handleTime.increase();
        }
      }
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [time, active, changeAction]);

  return (
    <CountdownCtx.Provider value={{ time, hasActive, hasChangeAction }}>
      {props.children}
    </CountdownCtx.Provider>
  );
}

export default CountdownProvider;
