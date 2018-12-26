import React, { Component, Fragment } from "react";
import { mockFetchClientsInfo } from "../../utilities/mockApi";

import SemiDonutChart from "../semiDonutChart/SemiDonutChart";
import BarChart_12 from "../barChart_12/BarChart_12";
import GrowthBox from "../growthBox/GrowthBox";
import Button from "../button/Button";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Error from "../error/Error";

class ClientsInfo extends Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state = {
      loading: true,
      error: false,
      fetchedData: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleButtonClick() {
    //eslint-disable-next-line
    console.log("Button was clicked.");
  }

  async fetchData() {
    await mockFetchClientsInfo()
      .then(({ max, data }) => {
        this.setState(prevState => ({
          ...prevState,
          loading: false,
          data,
          max
        }));
      })
      .catch(err => {
        this.setState(prevState => ({ ...prevState, error: true }));
        if (DEVELOPMENT) throw new Error(err);
      });
  }

  render() {
    const { max, data, loading, error } = this.state;

    return (
      <section className="clients-info">
        <header className="clients-info-header">
          <Button noBody onClick={this.handleButtonClick}>
            Clients
            <i className="fas fa-caret-right" />
          </Button>
          <Button noBody onClick={this.handleButtonClick}>
            <i className="fas fa-cog" />
          </Button>
        </header>

        <div className="clients-info-charts">
          {error ? (
            <Error errorText="Oops, there was a problem" />
          ) : loading ? (
            <LoadingSpinner title="information" />
          ) : (
            <Fragment>
              <SemiDonutChart
                name="active clients"
                score={data[data.length - 1].value}
                max={max}
              />
              <BarChart_12 name="Last 12 months" max={max} data={data} />
              <GrowthBox
                prevValue={data[0].value}
                currentValue={data[data.length - 1].value}
              />
            </Fragment>
          )}
        </div>
      </section>
    );
  }
}

export default ClientsInfo;
