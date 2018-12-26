import React from "react";

const GrowthBox = ({ prevValue, currentValue }) => {
  console.log("prevValue:", prevValue);
  console.log("currentValue:", currentValue);

  const label =
    currentValue > prevValue
      ? "Increase"
      : prevValue === currentValue
      ? "Unchanged"
      : "Decrease";

  const iconClass =
    currentValue > prevValue
      ? "fas fa-angle-double-up"
      : prevValue === currentValue
      ? "fas fa-grip-lines"
      : "fas fa-angle-double-down";

  return (
    <div className="growth-box">
      <div className="growth-box-wrapper">
        <i className={iconClass} />

        <span className="growth-number">{currentValue - prevValue}</span>
      </div>
      <span className="growth-box-label">{label}</span>
    </div>
  );
};

export default GrowthBox;
