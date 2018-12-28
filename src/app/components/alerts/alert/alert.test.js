import React from "react";
import { mount } from "enzyme";
import Alert from "./Alert";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../../tests/config/testUtils";
import { formatDate } from "../../../utilities/formatDate";

describe("Expect <Alert />", () => {
  const VERY = "very";
  const MIDDLE = "middle";
  const LOW = "low";

  const defaultProps = {
    name: "John Doe",
    event: "Test event",
    eventDate: "Jan-2019",
    importance: VERY
  };

  const setup = (testProps = {}) => {
    const props = {
      ...defaultProps,
      ...testProps
    };
    return mount(<Alert {...props} />);
  };

  it("to render correctly", () => {
    const wrapper = renderer.create(<Alert {...defaultProps} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with correct props", () => {
    propTypeErrors(<Alert {...defaultProps} />, defaultProps);
    propTypeErrors(<Alert {...defaultProps} importance={MIDDLE} />, {
      ...defaultProps,
      importance: MIDDLE
    });
    propTypeErrors(<Alert {...defaultProps} importance={LOW} />, {
      ...defaultProps,
      importance: LOW
    });
  });

  describe("when props are correct", () => {
    const wrapper = setup();

    it("to display correct text in <p class='name' />", () => {
      expect(wrapper.find("p.name").text()).toEqual(defaultProps.name);
    });

    it("to display correct text in <p class='event' />", () => {
      expect(wrapper.find("p.event").text()).toEqual(
        `${defaultProps.name.split(" ")[0]}'s ${defaultProps.event} coming up`
      );
    });

    it("to display correct text in <p class='date' />", () => {
      expect(wrapper.find("p.date").text()).toEqual(
        formatDate(defaultProps.eventDate)
      );
    });

    it("to display <LevelBar /> in <div class='section-stats' />", () => {
      expect(wrapper.find("div.section-stats").find("LevelBar")).toHaveLength(
        1
      );
    });
  });
  describe("when props are missing", () => {
    const testProps = {
      name: "",
      event: "",
      eventDate: "",
      importance: VERY
    };

    const wrapper = setup(testProps);

    it("to display  text in <p class='name' />", () => {
      expect(wrapper.find("p.name").text()).toEqual("");
    });

    it("to not display text in <p class='event' />", () => {
      expect(wrapper.find("p.event").text()).toEqual("");
    });

    it("to not display text in <p class='date' />", () => {
      expect(wrapper.find("p.date").text()).toEqual("");
    });
  });
});
