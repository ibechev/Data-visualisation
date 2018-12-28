import React from "react";
import PropTypes from "prop-types";

const LoadingSpinner = ({ title }) => {
  return (
    <div className="loading-spinner">
      <i className="fas fa-spinner fa-spin" />
      <p className="loading-title">Loading {title.toLowerCase()} ...</p>
    </div>
  );
};

LoadingSpinner.propTypes = {
  title: PropTypes.string.isRequired
};

export default LoadingSpinner;
