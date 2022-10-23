import { Sub } from "@components/Sub";
import styled from "@emotion/styled";
import { Fragment } from "react";
import { ITEMS, TItem } from "./constants";
import { Content } from "./Content";
import { Item } from "./Item";

const Root = styled.div``;

export const Timeline = () => (
  <Root className="p-4">
    <Sub>Recent projects - </Sub>
    <div className="py-2" />
    <ul>
      {ITEMS.map((item: TItem, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && <li className="py-2" />}
          <Item>
            <Content {...item} />
          </Item>
        </Fragment>
      ))}
    </ul>
  </Root>
);
