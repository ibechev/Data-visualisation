import React from "react";
import PropTypes from "prop-types";

const LevelBar = ({ level }) => {
  const LOW = "low";
  const MIDDLE = "middle";
  const VERY = "very";

  const middleBarClass = `bar ${MIDDLE} ${
    level === MIDDLE || level === VERY ? "active" : ""
  }`;
  const veryBarClass = `bar ${VERY} ${level === VERY ? "active" : ""}`;

  return (
    <div className="level-bar-wrapper">
      <p className="title">{level}</p>
      <div className="bars">
        <span className={`bar ${LOW} active`} />
        <span className={middleBarClass} />
        <span className={veryBarClass} />
      </div>
    </div>
  );
};

LevelBar.propTypes = {
  level: PropTypes.oneOf(["low", "middle", "very"]).isRequired
};

export default LevelBar;
