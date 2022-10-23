import { Sub } from "@components/Sub";
import { Content } from "./Content";
import { ITEMS, TItem } from "./constants";
import { Item } from "./Item";

export const Links = () => (
  <>
    <Sub>Links - </Sub>
    <div className="py-2" />
    <ul className="flex justify-around">
      {ITEMS.map((item: TItem) => (
        <Item key={item.title}>
          <Content {...item} />
        </Item>
      ))}
    </ul>
    <div className="py-2"/>
  </>
);
