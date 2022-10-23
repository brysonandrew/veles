import styled from "@emotion/styled";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { GlitchFilter } from "./GlitchFilter";

const Root = styled(motion.div)``;

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

export const Pic = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(opacity, [1, 0], [1, 0.8]);

  return (
    <Root
      style={{ opacity, scale }}
      className="fixed top-12 -left-6 flex flex-col items-center opacity-40"
    >
      <GlitchFilter width="294" height="268">
        <Image
          x="0%"
          y="0%"
          width="294"
          height="268"
          preserveAspectRatio="xMidYMid slice"
          xlinkHref="/headandshoulders.png"
        />
      </GlitchFilter>
    </Root>
  );
};
