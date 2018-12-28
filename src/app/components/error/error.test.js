import React from "react";
import { mount } from "enzyme";
import Error from "./Error";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../tests/config/testUtils";

describe("Expect <Error />", () => {
  const defaultProps = {
    errorText: "Error text"
  };

  it("to renderCorrectly", () => {
    const wrapper = renderer.create(<Error {...defaultProps} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with correct props", () => {
    propTypeErrors(<Error {...defaultProps} />, defaultProps);
  });

  it("to display prop 'errorText' in <p class='error' />", () => {
    const wrapper = mount(<Error {...defaultProps} />);
    expect(wrapper.find("p.error").text()).toEqual(defaultProps.errorText);
  });
});
