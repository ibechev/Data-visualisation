import React from "react";
import PropTypes from "prop-types";

import Button from "../../button/Button";

const AlertsFooter = ({ handleSeeMore, handleViewAll }) => {
  return (
    <footer className="alerts-footer">
      <Button bgc="primary-light" onClick={handleSeeMore}>
        See more <i className="fas fa-caret-down" />
      </Button>
      <Button noBody onClick={handleViewAll}>
        View all
      </Button>
    </footer>
  );
};

AlertsFooter.propTypes = {
  handleSeeMore: PropTypes.func.isRequired,
  handleViewAll: PropTypes.func.isRequired
};

export default AlertsFooter;
