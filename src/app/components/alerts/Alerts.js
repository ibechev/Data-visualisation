import React, { Component, Fragment } from "react";
import { mockFetchAlerts } from "../../utilities/mockApi";

import Alert from "./alert/Alert";
import AlertsHeader from "./alertsHeader/AlertsHeader";
import AlertsFooter from "./alertsFooter/AlertsFooter";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      alerts: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleButtonClick() {
    const { error, loading } = this.state;
    if (!error && !loading)
      // eslint-disable-next-line
      console.log("Button was clicked");
  }

  async fetchData() {
    await mockFetchAlerts()
      .then(res => {
        this.setState(prevState => ({
          ...prevState,
          alerts: [...res],
          loading: false
        }));
      })
      .catch(err => {
        this.setState(prevState => ({
          ...prevState,
          error: err
        }));
        if (DEVELOPMENT) throw new Error(err);
      });
  }

  render() {
    const { alerts, loading, error } = this.state;

    return (
      <section className="alerts">
        <AlertsHeader
          loading={loading}
          error={error}
          latestAlerts={alerts.length}
          handleSave={this.handleButtonClick}
          handleImportance={this.handleButtonClick}
          handleChart={this.handleButtonClick}
          handleFilter={this.handleButtonClick}
          handleUndo={this.handleButtonClick}
          handleSettings={this.handleButtonClick}
        />

        {error ? (
          <p className="error">Oops, there was a problem</p>
        ) : loading ? (
          <LoadingSpinner title="alerts" />
        ) : (
          <Fragment>
            <ul className="alerts-list">
              {alerts.map((alert, i) => (
                <Alert key={i} {...alert} />
              ))}
            </ul>

            <AlertsFooter
              handleSeeMore={this.handleButtonClick}
              handleViewAll={this.handleButtonClick}
            />
          </Fragment>
        )}
      </section>
    );
  }
}

export default Alerts;
