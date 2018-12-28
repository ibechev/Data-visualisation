import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import App from "./App";

describe("Expect <App />", () => {
  it("to render correctly", () => {
    const wrapper = renderer.create(<App />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to render one <ClientsInfo /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("ClientsInfo")).toHaveLength(1);
  });

  it("to render one <Alerts /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Alerts")).toHaveLength(1);
  });
});
