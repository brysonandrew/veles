import styled from "@emotion/styled";
import { Email } from "@icons/Email";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import COLORS from "../../../tailwind.config-colors.json";

const Title = styled.h1``;

export const Header = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  return (
    <header className="fixed top-0 flex items-center justify-between p-4 z-40 w-full">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg"
      />
      <Title className="relative uppercase text-lg w-[calc(100%_-_4rem)] -mt-1">
        frontend web
      </Title>
      <a
        href="mailto:andrewbryson12@gmail.com"
        className="relative flex items-center justify-center rounded-full w-10 h-10 --panel"
      >
        <Email  />
      </a>
    </header>
  );
};
