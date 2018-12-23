import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, noBody, bgc, onClick }) => {
  const buttonClass = `button ${noBody ? "no-body" : bgc}`;
  const handleClick = () => {
    typeof onClick === "function" && onClick();
  };

  return (
    <button type="button" className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  noBody: false,
  bgc: "primary",
  onClick: null
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  noBody: PropTypes.bool,
  bgc: PropTypes.oneOf(["primary", "primary-light"]),
  onClick: PropTypes.func
};

export default Button;
