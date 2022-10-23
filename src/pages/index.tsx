import { Home } from "@components/home";
import { Tech } from "@components/tech";
import { Timeline } from "@components/timeline";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Root = styled(motion.section)`
  min-height: calc(100vh + 400px);
`;

export const Index = () => (
  <Root>
    <Home />
    <div className="relative z-20 bg-black-dark">
      <Tech />
      <Timeline />
    </div>
  </Root>
);
