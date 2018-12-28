import React from "react";
import { mount } from "enzyme";
import BarChart_12 from "./BarChart_12";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../tests/config/testUtils";
import { mockCustomerInfo } from "../../utilities/mockValues";

describe("Expect <BarChart />", () => {
  const defaultProps = {
    name: "Test name",
    max: mockCustomerInfo.max,
    data: [...mockCustomerInfo.data]
  };

  const wrapper = mount(<BarChart_12 {...defaultProps} />);

  it("to render correctly", () => {
    const snapshot = renderer
      .create(<BarChart_12 {...defaultProps} />)
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it("to not throw error with correct props", () => {
    propTypeErrors(<BarChart_12 {...defaultProps} />, defaultProps);
  });

  it("to render 12 bars", () => {
    expect(wrapper.find("div.bar")).toHaveLength(12);
  });

  it("to set the correct height of each bar", () => {
    let expectedHeight = "";
    wrapper.find("span.value").forEach((span, i) => {
      expectedHeight = (defaultProps.data[i].value / defaultProps.max) * 100;
      expect(span.prop("style")).toHaveProperty("height", `${expectedHeight}%`);
    });
  });

  it("to display prop 'name' indside <span class='bar-chart-label' />", () => {
    expect(wrapper.find("span.bar-chart-label").text()).toEqual(
      defaultProps.name
    );
  });
});
