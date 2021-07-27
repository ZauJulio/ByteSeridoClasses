import React from "react";

type CountdownCtxProps = {
  time: number;
};

const CountdownCtxInner: CountdownCtxProps = {
  time: 0,
};

const CountdownCtx = React.createContext<CountdownCtxProps>(CountdownCtxInner);

export default CountdownCtx;
