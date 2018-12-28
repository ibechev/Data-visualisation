import React from "react";
import { mount } from "enzyme";
import Alerts from "./Alerts";
import renderer from "react-test-renderer";
import { mockAlerts } from "../../utilities/mockValues";

describe("Expect <Alerts />", () => {
  const defaultState = {
    alerts: [...mockAlerts],
    loading: true,
    error: false
  };

  const setup = (testState = {}) => {
    const state = {
      ...defaultState,
      ...testState
    };
    const wrapper = mount(<Alerts />);
    wrapper.setState({ ...state });
    return wrapper;
  };

  it("to render correctly", () => {
    let wrapper = renderer.create(<Alerts />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to call method 'fetchData()' after the component mounts", () => {
    const spyFetchData = jest.spyOn(Alerts.prototype, "fetchData");
    setup();
    expect(spyFetchData).toHaveBeenCalledTimes(1);
  });

  it("to have 'state.error' set to 'false' and 'state.loading' set to 'true' by default", () => {
    const wrapper = setup();
    expect(wrapper.state("error")).toEqual(false);
    expect(wrapper.state("loading")).toEqual(true);
  });

  describe("when 'state.error' is set to true", () => {
    const testState = {
      error: true
    };

    const wrapper = setup(testState);

    it("to display <p class='error' />", () => {
      expect(wrapper.find("p.error")).toHaveLength(1);
    });

    it("to not display <LoadingSpinner />", () => {
      expect(wrapper.find("LoadingSpinner")).toHaveLength(0);
    });

    it("to not display <ul class='alerts-list' /> or <AlertsFooter />", () => {
      expect(wrapper.find("ul.alert-list")).toHaveLength(0);
      expect(wrapper.find("AlertsFooter")).toHaveLength(0);
    });
  });

  describe("when 'state.error' is set to 'false' and 'state.loading' is set to 'true", () => {
    const wrapper = setup();

    it("to not display <p class='error' />", () => {
      expect(wrapper.find("p.error")).toHaveLength(0);
    });

    it("to not display <ul class='alerts-list' /> or <AlertsFooter />", () => {
      expect(wrapper.find("ul.alert-list")).toHaveLength(0);
      expect(wrapper.find("AlertsFooter")).toHaveLength(0);
    });

    it("to display LoadingSpinner />", () => {
      expect(wrapper.find("LoadingSpinner")).toHaveLength(1);
    });
  });

  describe("when 'state.error' is 'false' and 'state.loading' is 'false'", () => {
    const testState = {
      loading: false
    };

    const wrapper = setup(testState);

    it("to not display <p class='error' />", () => {
      expect(wrapper.find("p.error")).toHaveLength(0);
    });

    it("to not display <LoadingSpinner />", () => {
      expect(wrapper.find("LoadingSpinner")).toHaveLength(0);
    });

    it("to display <AlertsFooter /> and <ul class='alerts-list' /> with the correct amount or <Alert /> components", () => {
      expect(wrapper.find("ul.alerts-list")).toHaveLength(1);
      expect(wrapper.find("AlertsFooter")).toHaveLength(1);
      expect(wrapper.find("Alert")).toHaveLength(defaultState.alerts.length);
    });
  });
});
