import React from "react";
import { shallow } from "enzyme";
import SemiDonutChart from "./SemiDonutChart";
import renderer from "react-test-renderer";
import { mockCustomerInfo } from "../../utilities/mockValues";
import { propTypeErrors } from "../../../../tests/config/testUtils";

describe("Expect <SemiDonutChart />", () => {
  const defaultProps = {
    name: "Semi donut chart",
    score: 110,
    max: 200
  };

  const wrapper = shallow(<SemiDonutChart {...defaultProps} />);

  it("to render correctly", () => {
    const wrapper = renderer
      .create(<SemiDonutChart {...defaultProps} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with correct props", () => {
    propTypeErrors(<SemiDonutChart {...defaultProps} />, defaultProps);
  });

  it("to set the correct style of <div class='arc'", () => {
    const degrees = ((defaultProps.score / defaultProps.max) * 100 * 180) / 100;
    expect(wrapper.find("div.arc").prop("style")).toHaveProperty(
      "transform",
      `rotate(${degrees}deg)`
    );
  });

  it("to display prop 'score' in <span class='score'", () => {
    expect(wrapper.find("span.score").text()).toEqual(
      defaultProps.score.toString()
    );
  });

  it("to display prop 'name' in <span class='donut-chart-label' />", () => {
    expect(wrapper.find("span.donut-chart-label").text()).toEqual(
      defaultProps.name
    );
  });
});
