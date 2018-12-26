import React from "react";
import PropTypes from "prop-types";

const SemiDonutChart = ({ name, score, max }) => {
  const degrees = ((score / max) * 100 * 180) / 100;

  const arcFill = {
    WebkitTransform: `rotate(${degrees}deg)`,
    msTransform: `rotate(${degrees}deg)`,
    transform: `rotate(${degrees}deg)`
  };

  return (
    <div className="semi-donut-chart-container">
      <div className="donut-wrapper">
        <div className="arc" style={arcFill} />
        <span className="score">{score}</span>
      </div>
      <span className="donut-chart-label">{name}</span>
    </div>
  );
};

SemiDonutChart.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default SemiDonutChart;
