import React, { Fragment } from "react";

const SemiDonutChart = ({ name, score, max }) => {
  const degrees = ((score / max) * 100 * 180) / 100;

  const arcFill = {
    ["-webkit-transform"]: `rotate(${degrees}deg)`,
    ["-ms-transform"]: `rotate(${degrees}deg)`,
    transform: `rotate(${degrees}deg)`
  };

  return (
    <div className="semi-donut-chart-container">
      <div className="donut-chart-wrapper">
        <div className="arc" style={arcFill} />
        <span className="score">{score}</span>
      </div>
      <span className="donut-chart-label">{name}</span>
    </div>
  );
};

export default SemiDonutChart;
