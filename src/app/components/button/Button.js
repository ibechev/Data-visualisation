import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, noBody, bgc }) => {
  const buttonClass = `button ${noBody ? "no-body" : bgc}`;

  return (
    <button type="button" className={buttonClass}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  noBody: false,
  bgc: "primary"
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  noBody: PropTypes.bool,
  bgc: PropTypes.oneOf(["primary", "primary-light"])
};

export default Button;
