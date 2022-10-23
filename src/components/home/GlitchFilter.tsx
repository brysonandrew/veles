import { FC, SVGAttributes } from "react";

const OFFSET = 0.2;
const MORPH_RADIUS = 2;

type TProps = {
  children: JSX.Element;
} & SVGAttributes<SVGElement>;
export const GlitchFilter: FC<TProps> = ({
  children,
  ...props
}) => (
  <svg
    className="Playground__svg"
    viewBox="0 0 294 268"
    {...props}
  >
    <defs>
      <filter
        id="filter"
        x={`-${OFFSET}%`}
        y={`-${OFFSET}%`}
        width={`${100 + OFFSET}%`}
        height={`${100 + OFFSET}%`}
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feColorMatrix
          in="SourceGraphic"
          type="saturate"
          values="0.10"
          result="grey"
        />

        <feMorphology
          operator="dilate"
          radius={`${MORPH_RADIUS * 1.4} 0`}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="grey"
          result="morphology1"
        />
      </filter>
      <filter
        id="filter-2"
        x={`-${OFFSET}%`}
        y={`-${OFFSET}%`}
        width={`${100 + OFFSET}%`}
        height={`${100 + OFFSET}%`}
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feColorMatrix
          in="SourceGraphic"
          type="saturate"
          values="0.10"
          result="grey"
        />

        <feMorphology
          operator="dilate"
          radius={`${MORPH_RADIUS} 0`}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="grey"
          result="morphology1"
        />
      </filter>
      <filter
        id="filter-3"
        x={`-${OFFSET}%`}
        y={`-${OFFSET}%`}
        width={`${100 + OFFSET}%`}
        height={`${100 + OFFSET}%`}
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="linearRGB"
      >
        <feColorMatrix
          in="SourceGraphic"
          type="saturate"
          values="0.10"
          result="grey"
        />
        <feMorphology
          operator="dilate"
          radius={`${MORPH_RADIUS * 1.2} 0`}
          x="0%"
          y="0%"
          in="grey"
          width="100%"
          height="100%"
          result="morphology1"
        />
      </filter>
    </defs>
    {children}
  </svg>
);
