import React from "react";
import posed from "react-pose";

// Setup variables for size
const MARGIN = 4.5;
const HEIGHT = 50;
const WIDTH = 125;
const CENTER_X = WIDTH * 0.5;
const CENTER_Y = HEIGHT * 0.5;
const START_X = MARGIN;
const END_X = WIDTH - MARGIN;

const MIN_X = -CENTER_X + MARGIN * 2;
const MAX_X = CENTER_X - MARGIN * 2;

// Setup animation with React Pose
const SliderKnob = posed.circle({
  draggable: true,
  dragBounds: {
    left: MIN_X,
    top: -CENTER_Y + MARGIN * 2,
    bottom: CENTER_Y - MARGIN * 2,
    right: MAX_X
  },
  dragEnd: {
    y: 0,
    transition: { type: "spring", damping: 80, stiffness: 300 }
  }
});

function Slider({ leftColour, rightColour, onChange, knobColour }) {
  // Keep track of X and Y for svg path positioning
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const onXChange = v => {
    setX(v + CENTER_X);
    // Send a percentage to onChange/1
    onChange(Math.floor(((v - MIN_X) * 100) / (MAX_X - MIN_X)));
  };

  const onYChange = v => {
    setY(v + CENTER_Y);
  };

  return (
    <svg
      height={HEIGHT}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width={WIDTH}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d={`
          M ${START_X},${CENTER_Y}
          S ${(x - START_X) * 0.5},${y}
            ${x},${y}
          `}
          stroke={leftColour}
          strokeLinecap="round"
          strokeWidth="4"
        />
        <path
          d={`
          M ${x},${y}
          S ${x + (END_X - x) * 0.5},${y}
            ${END_X},${CENTER_Y}
        `}
          stroke={rightColour}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <SliderKnob
          cx={CENTER_X}
          cy={CENTER_Y}
          r="7"
          fill={knobColour}
          onValueChange={{ x: onXChange, y: onYChange }}
        />
      </g>
    </svg>
  );
}

export default Slider;
