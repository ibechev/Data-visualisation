import React from "react";
import PropTypes from "prop-types";

import Button from "../../button/Button";

const AlertsHeader = ({
  loading,
  latestAlerts,
  handleSave,
  handleImportance,
  handleChart,
  handleFilter,
  handleUndo,
  handleSettings
}) => {
  return (
    <header className="alerts-header">
      <div className="alerts-info">
        <h4 className="alerts-title">Alerts</h4>
        {!loading && (
          <p className="alerts-latest">Latest alerts ({latestAlerts})</p>
        )}
      </div>
      <div className="alerts-controls">
        <div className="main-alerts-controls">
          <ul className="controls-list">
            <li className="control-li">
              <Button noBody onClick={handleChart}>
                <i className="fas fa-chart-pie" />
              </Button>
            </li>
            <li className="control-li">
              <Button noBody onClick={handleFilter}>
                <i className="fas fa-filter" />
              </Button>
            </li>
            <li className="control-li">
              <Button noBody onClick={handleUndo}>
                <i className="fas fa-undo-alt" />
              </Button>
            </li>
            <li className="control-li">
              <Button noBody onClick={handleSettings}>
                <i className="fas fa-cog" />
              </Button>
            </li>
          </ul>
          <Button onClick={handleSave}>
            Save <i className="fas fa-caret-down" />
          </Button>
        </div>

        {!loading && (
          <div className="sort-alerts-controls">
            <Button noBody onClick={handleImportance}>
              IMPORTANCE <i className="fas fa-caret-down" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

AlertsHeader.propTypes = {
  loading: PropTypes.bool.isRequired,
  latestAlerts: PropTypes.number,
  handleSave: PropTypes.func.isRequired,
  handleImportance: PropTypes.func.isRequired,
  handleChart: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleUndo: PropTypes.func.isRequired,
  handleSettings: PropTypes.func.isRequired
};

export default AlertsHeader;
