import React, { Component } from "react";
import PropTypes from "prop-types";
import { mockAlerts } from "../../utilities/mockValues";

import Button from "../button/Button";
import Alert from "./alert/Alert";

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      ...prevState,
      alerts: [...mockAlerts]
    }));
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
          {this.state.alerts.map((alert, i) => (
            <Alert key={i} {...alert} />
          ))}
        </ul>

        <footer className="alerts-footer">
          <Button bgc="primary-light">
            See more <i className="fas fa-caret-down" />
          </Button>
          <Button noBody>View all</Button>
        </footer>
      </section>
    );
  }
}

export default Alerts;
