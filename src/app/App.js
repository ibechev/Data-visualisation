import React, { Component } from "react";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);

    this.polarToCartesian = this.polarToCartesian.bind(this);
    this.describeArc = this.describeArc.bind(this);
  }

  componentDidMount() {
    document
      .getElementById("arc1")
      .setAttribute("d", this.describeArc(150, 150, 100, -90, 45));
    document
      .getElementById("arc2")
      .setAttribute("d", this.describeArc(150, 150, 100, 45, 90));
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  }

  describeArc(x, y, radius, startAngle, endAngle) {
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y
    ].join(" ");

    return d;
  }

  render() {
    return (
      <div className="app">
        <svg>
          <path id="arc1" fill="none" stroke="#69a3e5" strokeWidth="45" />
          <path id="arc2" fill="none" stroke="#596169" strokeWidth="45" />
          <text x="140" y="150" className="small">
            ACTIVE CLIENTS
          </text>
        </svg>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired
};

export default App;
