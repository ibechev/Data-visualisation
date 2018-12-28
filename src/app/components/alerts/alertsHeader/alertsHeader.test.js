import React from "react";
import { mount } from "enzyme";
import AlertsHeader from "./AlertsHeader";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../../tests/config/testUtils";

describe("Expect <AlertsHeader />", () => {
  const defaultProps = {
    loading: true,
    error: false,
    latestAlerts: 10,
    handleSave: () => {},
    handleImportance: () => {},
    handleChart: () => {},
    handleFilter: () => {},
    handleUndo: () => {},
    handleSettings: () => {}
  };

  const setup = (testProps = {}) => {
    const props = {
      ...defaultProps,
      ...testProps
    };
    return mount(<AlertsHeader {...props} />);
  };

  it("to render correctly", () => {
    const wrapper = renderer
      .create(<AlertsHeader {...defaultProps} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with corrent props", () => {
    propTypeErrors(<AlertsHeader {...defaultProps} />, defaultProps);
  });

  describe("when prop 'loading' is 'true' and prop 'error' is 'false'", () => {
    const wrapper = setup();

    it("to not display <p class='alerts-latest'", () => {
      expect(wrapper.find("p.alerts-latest")).toHaveLength(0);
    });

    it("to not display <div class='sort-alerts-controls'", () => {
      expect(wrapper.find("div.sort-alerts-controls")).toHaveLength(0);
    });
  });

  describe("when prop 'loading' is 'false' and prop 'error' is 'true'", () => {
    const testProps = {
      loading: false,
      error: true
    };
    const wrapper = setup(testProps);

    it("to not display <p class='alerts-latest'", () => {
      expect(wrapper.find("p.alerts-latest")).toHaveLength(0);
    });

    it("to not display <div class='sort-alerts-controls'", () => {
      expect(wrapper.find("div.sort-alerts-controls")).toHaveLength(0);
    });
  });

  describe("when prop 'loading' is 'true' and prop 'error' is 'true'", () => {
    const testProps = {
      loading: true,
      error: true
    };
    const wrapper = setup(testProps);

    it("to not display <p class='alerts-latest'", () => {
      expect(wrapper.find("p.alerts-latest")).toHaveLength(0);
    });

    it("to not display <div class='sort-alerts-controls'", () => {
      expect(wrapper.find("div.sort-alerts-controls")).toHaveLength(0);
    });
  });

  describe("when prop 'loading' is 'false' and prop 'error' is 'false'", () => {
    const testProps = {
      loading: false,
      error: false
    };
    const wrapper = setup(testProps);

    it("to display <p class='alerts-latest'", () => {
      expect(wrapper.find("p.alerts-latest")).toHaveLength(1);
    });

    it("to display <div class='sort-alerts-controls'", () => {
      expect(wrapper.find("div.sort-alerts-controls")).toHaveLength(1);
    });
  });

  it("to call button handlers on each click of a button", () => {
    const spyBtnHandler = jest.fn();
    const testProps = {
      handleSave: spyBtnHandler,
      handleImportance: spyBtnHandler,
      handleChart: spyBtnHandler,
      handleFilter: spyBtnHandler,
      handleUndo: spyBtnHandler,
      handleSettings: spyBtnHandler,
      loading: false
    };
    const wrapper = setup(testProps);

    wrapper.find("button").forEach(button => button.simulate("click"));

    expect(spyBtnHandler).toHaveBeenCalledTimes(wrapper.find("button").length);
  });

  it("to display the corrent amount of latest alerts", () => {
    const wrapper = setup({ loading: false });
    expect(wrapper.find(".alerts-latest").text()).toEqual(
      `Latest alerts (${defaultProps.latestAlerts})`
    );
  });
});
