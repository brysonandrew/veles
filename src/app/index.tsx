import { MotionConfig } from "framer-motion";
import { MOTION_CONFIG } from "@state/constants";
import { Boundary } from "@components/Boundary";
import { history } from "./history";
import { Router } from "./Router";
import { Source } from "./source";
import "@styles/globals.css";
import { Provider } from "@state/app/Provider";

export const App = () => {
  return (
    <Provider>
      <MotionConfig {...MOTION_CONFIG}>
        <Boundary>
          <Router history={history}/>
        </Boundary>
      </MotionConfig>
    </Provider>
  );
};
