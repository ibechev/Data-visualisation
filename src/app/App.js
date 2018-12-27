import React from "react";

import Alerts from "./components/alerts/Alerts";
import ClientsInfo from "./components/clientsInfo/ClientsInfo";

const App = () => {
  return (
    <div className="app">
      <ClientsInfo />
      <Alerts />
    </div>
  );
};

export default App;
