import React from "react";

type CountdownCtxProps = {
  time: number;
  hasActive: () => void;
  hasChangeAction: () => void;
};

const CountdownCtxInner: CountdownCtxProps = {
  time: 0,
  hasActive: () => {},
  hasChangeAction: () => {}
};

const CountdownCtx = React.createContext<CountdownCtxProps>(CountdownCtxInner);

export default CountdownCtx;
