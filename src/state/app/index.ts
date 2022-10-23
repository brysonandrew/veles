import type { TState, TReducerAction } from "./types";

export const reducer = (
  state: TState,
  { type, value }: TReducerAction
) => {
  switch (type) {
    case "threshold-reached": {
      return {
        ...state,
        isThreshold: true,
      };
    }
    case "threshold-lost": {
      return {
        ...state,
        isThreshold: false,
      };
    }
    default: {
      console.error(type);
      throw new Error(`Action type invalid. ${type}`);
    }
  }
};
