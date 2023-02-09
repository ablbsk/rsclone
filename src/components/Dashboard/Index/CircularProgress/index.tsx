import "./circular-progress.scss";
import { FunctionComponent } from "react";
import { CircularProgressType } from "../../../../types";
import { specialColors } from "../../../../data/constants";

const CircularProgress: FunctionComponent<CircularProgressType> = ({
  progress,
}) => {
  const size = 200;
  const strokeWidth = 20;
  const arcLength = 2 * Math.PI * (size / 2 - strokeWidth); // = 2*PI*R
  const progressArcLength = (arcLength * ((100 - progress) / 100)).toFixed(1);

  return (
    <div className="circular-progress">
      <h3 className="circular-progress__header">Total Revenue</h3>
      <div className="circular-progress__container">
        <svg className="circular-progress__indicator">
          <circle
            className="circular-progress__track"
            stroke={specialColors.red.background}
          />
          <circle
            className="circular-progress__indication"
            stroke={specialColors.red.font}
            strokeDasharray={arcLength}
            strokeDashoffset={progressArcLength}
          />
        </svg>
        <div className="circular-progress__center">
          <span>Revenue</span>
          <span>{progress}%</span>
        </div>
      </div>
      <div>
        <h5 className="circular-progress__subtitle">Total sales made today</h5>
        <h2 className="circular-progress__value">$178</h2>
      </div>
    </div>
  );
};

export default CircularProgress;
