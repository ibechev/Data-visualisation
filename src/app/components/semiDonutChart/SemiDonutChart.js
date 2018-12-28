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
  max(props, propName, component) {
    if (!props.hasOwnProperty(propName))
      return new Error(`Missing prop ${propName} at component ${component}.`);

    if (typeof props[propName] !== "number")
      return new Error(`Prop ${propName} must be of type number.`);

    if (props[propName] < props.score)
      return new Error(`Prop ${propName} can not be less than prop score.`);
  }
};

export default SemiDonutChart;
