import React, { Fragment } from "react";

import SemiDonutChart from "../semiDonutChart/SemiDonutChart";
import Button from "../button/Button";

const ClientsInfo = () => {
  //eslint-disable-next-line
  const handleButtonClick = () => console.log("Button was clicked.");

  return (
    <section className="clients-info">
      <header className="clients-info-header">
        <Button noBody onClick={handleButtonClick}>
          Clients
          <i className="fas fa-caret-right" />
        </Button>
        <Button noBody>
          <i className="fas fa-cog" />
        </Button>
      </header>
      <div className="clients-info-body">
        <SemiDonutChart name="active clients" score="204" max="270" />
      </div>
    </section>
  );
};

export default ClientsInfo;
