import type {
  Transition,
  AnimationProps,
  MotionProps,
  Tween,
} from "framer-motion";

export const MOTION_CONFIG = {
  transition: {
    ease: "linear",
    duration: 0.2,
  },
};

export const TWEEN: Tween = {
  type: "tween",
  duration: 0.5,
  ease: [0.54, 0.01, 0.61, 1],
};

export const LINEAR: { transition: Transition } = {
  transition: { ease: "linear" },
};

export const SPRING: { transition: Transition } = {
  transition: {
    type: "spring",
    duration: 0.7,
    bounce: 0.2,
  },
};

export const SMOOTH_EASE: [number, number, number, number] =
  [0.43, 0.13, 0.23, 0.96];
export const SMOOTH: Transition = {
  type: "tween",
  ease: SMOOTH_EASE,
};
export const EASE_IN: Transition = {
  type: "tween",
  ease: "easeIn",
};
export const EASE_OUT: Transition = {
  type: "tween",
  ease: "easeOut",
};
export const EASE_IN_2: Transition = {
  ...EASE_IN,
  duration: 2,
};
export const EASE_IN_02: Transition = {
  ...EASE_IN,
  duration: 0.2,
};

export const EASE_OUT_02: Transition = {
  ...EASE_OUT,
  duration: 0.2,
};
export const EASE_OUT_06: Transition = {
  ...EASE_OUT,
  duration: 0.6,
};
export const EASE_OUT_2: Transition = {
  ...EASE_OUT,
  duration: 2,
};
export const SMOOTH_02: Transition = {
  ...SMOOTH,
  duration: 0.2,
};
export const SMOOTH_04: Transition = {
  ...SMOOTH,
  duration: 0.4,
};
export const SMOOTH_1: Transition = {
  ...SMOOTH,
  duration: 1,
};
export const SMOOTH_2: Transition = {
  ...SMOOTH,
  duration: 2,
};
export const SMOOTH_3: Transition = {
  ...SMOOTH,
  duration: 2,
};
export const SMOOTH_4: Transition = {
  ...SMOOTH,
  duration: 2,
};

export const FADE_IN: MotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  ...LINEAR,
};

export const SHIFT_UP: MotionProps = {
  initial: { y: 10 },
  animate: { y: 0 },
  exit: { y: 10 },
  ...SMOOTH,
};

export const MARCHING_ANTS: AnimationProps = {
  // WIP - currently css animation works better
  animate: { strokeDashoffset: ["8px", "0px"] },
  transition: {
    type: "tween",
    duration: 0.8,
    repeat: Infinity,
  },
};

export const DROP_DOWN: MotionProps = {
  initial: { opacity: 0.9, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0.9, y: 6 },
  transition: {
    opacity: { ease: "linear" },
  },
};

export const DROP_IN: MotionProps = {
  initial: { y: "-100%" },
  animate: { y: "0px" },
  exit: { y: "-100%" },
  ...SPRING,
};

export const SLIDE_LEFT: MotionProps = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  ...LINEAR,
};

export const SLIDE_RIGHT: MotionProps = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  ...LINEAR,
};

export const ID_PREFIX_MASK = "__ID_PREFIX_MASK";
export const ID_PREFIX_CLIP = "__ID_PREFIX_CLIP";
export const ID_PREFIX_FILTER = "__ID_PREFIX_FILTER";

export const TMP_ADD_PREFIX = "_tmp_add_";

export const resolveLocalStorageKey = (
  seed: string
): string => `__ADD_${seed}_LOCAL_STORAGE`;

export const TRANSITION_MS = 400;
export const TRANSITION_S = TRANSITION_MS / 1000;

export const CLOSE_PREVIEW_SIZE = 80;

export const ADD_PARAM_KEY = "add";
export const FILTER_PARAM_KEY = "filter";
export const SEARCH_PARAM_KEY = "search";

export const SORT_PARAM_KEY = "sort";
export const TAB_PARAM_KEY = "tab";
export const OPEN_PARAM_KEY = "open";

export const DEPLOYMENT_KEY_PARAM_KEY = "deploymentKey";
