import styled from "@emotion/styled";
import { FC } from "react";

const Root = styled.li``;

type TProps = {
  children: JSX.Element;
};
export const Item: FC<TProps> = ({ children }) => (
  <Root className="relative p-2 --panel rounded-md pr-3">
    {children}
  </Root>
);
