import styled from "@emotion/styled";
import { FC } from "react";
import { TItem } from "./constants";

const Root = styled.a``;

export const Content: FC<TItem> = ({
  title,
  href
}) => (
  <Root href={href} target="_blank">
    {title}
  </Root>
);
