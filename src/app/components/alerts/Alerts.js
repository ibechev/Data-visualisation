import React, { Component } from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="alerts">
        <header className="alerts-header">
          <div className="alerts-info">
            <h4 className="alerts-title">Alerts</h4>
            <p className="alerts-latest">Latest alerts (41)</p>
          </div>
          <div className="alerts-controls">
            <div className="main-alerts-controls">
              <ul className="controls-list">
                <li className="control-li">
                  <Button noBody>
                    <i className="fas fa-chart-pie" />
                  </Button>
                </li>
                <li className="control-li">
                  <Button noBody>
                    <i className="fas fa-filter" />
                  </Button>
                </li>
                <li className="control-li">
                  <Button noBody>
                    <i className="fas fa-undo-alt" />
                  </Button>
                </li>
                <li className="control-li">
                  <Button noBody>
                    <i className="fas fa-cog" />
                  </Button>
                </li>
              </ul>
              <Button>
                Save <i className="fas fa-caret-down" />
              </Button>
            </div>
            <div className="sort-alerts-controls">
              <Button noBody>
                IMPORTANCE <i className="fas fa-caret-down" />
              </Button>
            </div>
          </div>
        </header>
        <ul className="alerts-list">
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </section>
    );
  }
}

export default Alerts;
