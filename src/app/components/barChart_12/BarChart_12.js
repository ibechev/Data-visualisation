import React from "react";
import PropTypes from "prop-types";

const BarChart_12 = ({ name, max, data }) => {
  const renderBars = () => {
    return (
      data &&
      Array.isArray(data) &&
      data.length === 12 &&
      data.map(({ value }, i) => {
        const barHeight = (value / max) * 100;

        return (
          <div key={i} className="bar">
            <span className="value" style={{ height: `${barHeight}%` }} />
          </div>
        );
      })
    );
  };

  return (
    <div className="bar-chart_12">
      <div className="chart-wrapper">{renderBars()}</div>
      <span className="bar-chart-label">{name}</span>
    </div>
  );
};

BarChart_12.propTypes = {
  name: PropTypes.string.isRequired,
  max(props, propName, component) {
    if (!props.hasOwnProperty(propName))
      return new Error(
        `Prop ${propName} at component ${component} is missing.`
      );

    if (typeof props[propName] !== "number")
      return new Error(
        `Prop ${propName} at component ${component} must be a number.`
      );

    if (props[propName] < 1)
      return new Error(
        `The value of prop ${propName} must be greater than 0. `
      );
  },
  data(props, propName) {
    return PropTypes.arrayOf(
      (propValue, key, component, location, propFullName) => {
        if (typeof propValue[key] !== "object")
          return new Error(
            `Prop ${propName} must be array of objects. Check ${propFullName}.`
          );

        if (propValue.length !== 12)
          return new Error(
            `Prop ${propName} at component ${component} must be array of length 12.`
          );

        if (
          !propValue[key].hasOwnProperty("month") ||
          !propValue[key].hasOwnProperty("value")
        )
          return new Error(
            `Each object in prop ${propName} at component ${component} must be with shape {month: "...", value: ...}. Check ${propFullName}..`
          );

        if (
          typeof propValue[key].month !== "string" ||
          !propValue[key].month.length
        )
          return new Error(
            `Key month of each object in prop ${propName} at component ${component} must be a string and must not be empty. Check ${propFullName}..`
          );

        if (
          typeof propValue[key].value !== "number" ||
          propValue[key].value < 0
        )
          return new Error(
            `Key value of each object in prop ${propName} at component ${component} must be a zero or a positive number. Check ${propFullName}..`
          );

        if (propValue[key]["value"] > props.max) {
          return new Error(
            `The value of key 'value' in each object of prop ${propName} should not exceed the value of prop max(${
              props.max
            }). Check ${propFullName}.`
          );
        }
      }
    ).isRequired.apply(this, arguments);
  }
};

export default BarChart_12;
