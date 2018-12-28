import React from "react";
import { shallow } from "enzyme";
import LevelBar from "./LevelBar";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../tests/config/testUtils";

describe("Expect <LevelBar />", () => {
  const LOW = "low";
  const MIDDLE = "middle";
  const VERY = "very";

  const defaultProps = {
    level: LOW
  };

  const setup = (testProps = {}) => {
    const props = {
      ...defaultProps,
      ...testProps
    };
    return shallow(<LevelBar {...props} />);
  };

  it("to render correctly", () => {
    const wrapper = renderer.create(<LevelBar {...defaultProps} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with correct props", () => {
    propTypeErrors(<LevelBar level={LOW} />, { level: LOW });
    propTypeErrors(<LevelBar level={MIDDLE} />, { level: MIDDLE });
    propTypeErrors(<LevelBar level={VERY} />, { level: VERY });
  });

  it("to render the correct number od <span class='bar' /> elements", () => {
    const wrapper = setup();
    expect(wrapper.find("span.bar")).toHaveLength(3);
  });

  describe("when prop 'level' is set to 'low'", () => {
    const wrapper = setup();

    it("to add class 'active' to <span class='low' />", () => {
      expect(wrapper.find("span.low").hasClass("active")).toEqual(true);
    });

    it("to not add class 'active' to <span class='middle' /> and <span class='very' />", () => {
      expect(wrapper.find("span.middle").hasClass("active")).toEqual(false);
      expect(wrapper.find("span.very").hasClass("active")).toEqual(false);
    });
  });

  describe("when prop 'level' is set to 'middle'", () => {
    const wrapper = setup({ level: MIDDLE });

    it("to add class 'active' to <span class='low' />", () => {
      expect(wrapper.find("span.low").hasClass("active")).toEqual(true);
    });

    it("to add class 'active' to <span class='middle' />", () => {
      expect(wrapper.find("span.middle").hasClass("active")).toEqual(true);
    });

    it("to not add class 'active' to <span class='very' />", () => {
      expect(wrapper.find("span.very").hasClass("active")).toEqual(false);
    });
  });

  describe("when prop 'level' is set to 'very'", () => {
    const wrapper = setup({ level: VERY });

    it("to add class 'active' to all <span class='bar' />", () => {
      expect(wrapper.find("span.low").hasClass("active")).toEqual(true);
      expect(wrapper.find("span.middle").hasClass("active")).toEqual(true);
      expect(wrapper.find("span.very").hasClass("active")).toEqual(true);
    });
  });
});
