import React from "react";
import { shallow, mount } from "enzyme";
import ClientsInfo from "./ClientsInfo";
import renderer from "react-test-renderer";
import { mockCustomerInfo } from "../../utilities/mockValues";

describe("Expect <ClientsInfo />", () => {
  const defaultState = {
    loading: true,
    error: false,
    fetchedData: {
      data: [...mockCustomerInfo.data],
      max: mockCustomerInfo.max
    }
  };

  const setup = (testState = {}) => {
    const state = {
      ...defaultState,
      ...testState
    };
    const wrapper = shallow(<ClientsInfo />);
    wrapper.setState({ ...state });
    return wrapper;
  };

  it("to render correctly", () => {
    const wrapper = renderer.create(<ClientsInfo />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to call moethod 'fetchData()' after the component mounts", () => {
    const spyFetchData = jest.spyOn(ClientsInfo.prototype, "fetchData");
    shallow(<ClientsInfo />);
    expect(spyFetchData).toHaveBeenCalledTimes(1);
  });

  it("to set 'state.loading' to 'true' and 'state.error' to 'false' by default", () => {
    const wrapper = shallow(<ClientsInfo />);
    expect(wrapper.state("loading")).toEqual(true);
    expect(wrapper.state("error")).toEqual(false);
  });

  describe("when 'state.error' is set to 'true'", () => {
    const wrapper = setup({ error: true });

    it("to not display <LoadingSpinner />", () => {
      expect(wrapper.find("LoadingSpinner")).toHaveLength(0);
    });

    it("to not display <SemiDonutChart />", () => {
      expect(wrapper.find("SemiDonutChart")).toHaveLength(0);
    });

    it("to not display <BarChart_12 />", () => {
      expect(wrapper.find("BarChart_12")).toHaveLength(0);
    });

    it("to not display <GrowthBox />", () => {
      expect(wrapper.find("GrowthBox")).toHaveLength(0);
    });

    it("to display <Error />", () => {
      expect(wrapper.find("Error")).toHaveLength(1);
    });
  });

  describe("when 'state.error' is 'fasle' and 'state.loading' is 'true'", () => {
    const wrapper = setup();

    it("to display <LoadingSpinner />", () => {
      expect(wrapper.find("LoadingSpinner")).toHaveLength(1);
    });

    it("to not display <SemiDonutChart />", () => {
      expect(wrapper.find("SemiDonutChart")).toHaveLength(0);
    });

    it("to not display <BarChart_12 />", () => {
      expect(wrapper.find("BarChart_12")).toHaveLength(0);
    });

    it("to not display <GrowthBox />", () => {
      expect(wrapper.find("GrowthBox")).toHaveLength(0);
    });

    it("to not display <Error />", () => {
      expect(wrapper.find("Error")).toHaveLength(0);
    });
  });

  describe("when 'state.error' is 'fasle' and 'state.loading' is 'false'", () => {
    const wrapper = setup({ loading: false });

    it("to not display <LoadingSpinner />", () => {
      expect(wrapper.find("LoadingSpinner")).toHaveLength(0);
    });

    it("to not display <Error />", () => {
      expect(wrapper.find("Error")).toHaveLength(0);
    });

    it("to display <SemiDonutChart />", () => {
      expect(wrapper.find("SemiDonutChart")).toHaveLength(1);
    });

    it("to display <BarChart_12 />", () => {
      expect(wrapper.find("BarChart_12")).toHaveLength(1);
    });

    it("to display <GrowthBox />", () => {
      expect(wrapper.find("GrowthBox")).toHaveLength(1);
    });
  });

  it("to call button handlers on each click of a button", () => {
    const spyBtnHandler = jest.spyOn(
      ClientsInfo.prototype,
      "handleButtonClick"
    );
    const wrapper = mount(<ClientsInfo />);
    wrapper.find("button").forEach(button => button.simulate("click"));
    expect(spyBtnHandler).toHaveBeenCalledTimes(2);
  });
});
