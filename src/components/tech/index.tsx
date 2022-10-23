import { Sub } from "@components/Sub";
import styled from "@emotion/styled";
import { Fragment } from "react";
import { ITEMS, TItem } from "./constants";
import { Content } from "./Content";
import { Item } from "./Item";
import COLORS from "../../../tailwind.config-colors.json";

export const Tech = () => (
  <>
    <Sub>Core Tech Stack - </Sub>
    <div className="py-2" />
    <ul className="flex items-center justify-evenly">
      {ITEMS.map((item: TItem, index: number) => (
        <Fragment key={item.title}>
          {index !== 0 && (
            <li className="relative flex items-center justify-center h-4 w-4 z-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill={COLORS["white-darkest"]}
              >
                <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
              </svg>
            </li>
          )}
          <Item>
            <Content {...item} />
          </Item>
        </Fragment>
      ))}
    </ul>
  </>
);
