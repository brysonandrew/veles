import type {
  Dispatch,
  Reducer,
  ReducerState,
  ReducerAction,
} from "react";

export type TContext = TState & {
  dispatch: TDispatch;
};

export type TAction =
  | {
      type: "isLoading";
      value: boolean;
    }
  ;

export type TState = {
  isLoading:  boolean;
 
};

export type TActionType = null;
export type TActionValue = any;

export type TKeyValuePair = [
  key: TActionType,
  value: TActionValue
];

export type TDispatch = Dispatch<TAction>;
export type TReducer = Reducer<TState, TAction>;
export type TReducerState = ReducerState<TReducer>;
export type TReducerAction = ReducerAction<TReducer>;
