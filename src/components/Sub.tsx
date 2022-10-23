import { FC } from "react";

type TProps = { children: string };
export const Sub: FC<TProps> = ({ children }) => (
  <h4 className="text-xs">{children}</h4>
);
