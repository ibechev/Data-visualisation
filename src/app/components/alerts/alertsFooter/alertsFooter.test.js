import React from "react";
import { mount } from "enzyme";
import AlertsFooter from "./AlertsFooter";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../../tests/config/testUtils";

describe("Expect AlertsFooter", () => {
  const defaultProps = {
    handleSeeMore: () => {},
    handleViewAll: () => {}
  };

  const setup = (testProps = {}) => {
    const props = {
      ...defaultProps,
      ...testProps
    };
    return mount(<AlertsFooter {...props} />);
  };

  it("to render correctly", () => {
    const wrapper = renderer
      .create(<AlertsFooter {...defaultProps} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with correct props", () => {
    propTypeErrors(<AlertsFooter {...defaultProps} />, defaultProps);
  });

  it("to call button handlers on each click of a button", () => {
    const spyBtnHandler = jest.fn();
    const testProps = {
      handleSeeMore: spyBtnHandler,
      handleViewAll: spyBtnHandler
    };
    const wrapper = setup(testProps);

    wrapper.find("button").forEach(button => button.simulate("click"));
    expect(spyBtnHandler).toHaveBeenCalledTimes(wrapper.find("button").length);
  });
});
