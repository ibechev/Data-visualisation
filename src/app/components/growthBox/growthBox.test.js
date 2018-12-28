import React from "react";
import { shallow } from "enzyme";
import GrowthBox from "./GrowthBox";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../tests/config/testUtils";

describe("Expect <GrowthBox />", () => {
  const defaultProps = {
    prevValue: 100,
    currentValue: 150
  };
  const INCREASE = "Increase";
  const DECREASE = "Decrease";
  const UNCHANGED = "Unchanged";

  it("to render correctly", () => {
    const wrapper = renderer.create(<GrowthBox {...defaultProps} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with correct props", () => {
    propTypeErrors(<GrowthBox {...defaultProps} />, defaultProps);
  });

  it("to set the correct label, icon and number when prop 'prevValue' is less than prop 'currentValue'", () => {
    const wrapper = shallow(<GrowthBox {...defaultProps} />);

    expect(wrapper.find("span.growth-box-label").text()).toEqual(INCREASE);
    expect(wrapper.find("i.fa-angle-double-up")).toHaveLength(1);
    expect(wrapper.find("span.growth-number").text()).toEqual(
      (defaultProps.currentValue - defaultProps.prevValue).toString()
    );
  });

  it("to set the correct label, icon and number when prop 'prevValue' is greater than prop 'currentValue'", () => {
    const prevValue = 150;
    const currentValue = 100;

    const wrapper = shallow(
      <GrowthBox prevValue={prevValue} currentValue={currentValue} />
    );

    expect(wrapper.find("span.growth-box-label").text()).toEqual(DECREASE);
    expect(wrapper.find("i.fa-angle-double-down")).toHaveLength(1);
    expect(wrapper.find("span.growth-number").text()).toEqual(
      (currentValue - prevValue).toString()
    );
  });

  it("to set the correct label, icon and number when prop 'prevValue' is equal to prop 'currentValue'", () => {
    const prevValue = 150;
    const currentValue = 150;

    const wrapper = shallow(
      <GrowthBox prevValue={prevValue} currentValue={currentValue} />
    );

    expect(wrapper.find("span.growth-box-label").text()).toEqual(UNCHANGED);
    expect(wrapper.find("i.fa-grip-lines")).toHaveLength(1);
    expect(wrapper.find("span.growth-number").text()).toEqual(
      (currentValue - prevValue).toString()
    );
  });
});
