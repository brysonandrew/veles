import { useState, useTransition } from "react";
import type { FC } from "react";
import { useIsomorphicLayoutEffect } from "@hooks/useIsomorphicLayoutEffect";
import type { History } from "history";
import type { RouterProps } from "react-router";
import { BrowserRouter as _Router } from "react-router-dom";
import { Source } from "./source";

type TProps = Partial<RouterProps> & {
  history: History;
};
export const Router: FC<TProps> = ({
  history,
  children,
  ...props
}) => {
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useIsomorphicLayoutEffect(() => {
    history.listen((...args) => {
      startTransition(() => {
        setState(...args);
      });
    });
  }, [history]);

  return (
    <_Router
    // {...props}
    // location={state.location}
    // navigationType={state.action}
    // navigator={history}
    >
      <Source />
    </_Router>
  );
};
