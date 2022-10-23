import styled from "@emotion/styled";
import { useContext } from "@state/app/Context";
import { Header } from "./Header";
import { Pic } from "./Pic";
import { Sub } from "./Sub";

const Title = styled.h1``;

const Image = styled.image`
  filter: url(#filter);
  animation: 6s my-animation alternate infinite;

  @keyframes my-animation {
    0% {
      filter: grayscale(100%);
    }
    19% {
      filter: url(#filter);
    }
    20% {
      filter: url(#filter-2);
    }
    21% {
      filter: url(#filter-3);
    }
    94% {
      filter: grayscale(100%);
    }
  }
`;

export const Home = () => (
  <div>
    <Header />
    <div className="py-10" />
    <div className="flex">
      <Sub />
      <div className="py-6" />
      <Pic />
    </div>
    <div className="py-14" />
  </div>
);
