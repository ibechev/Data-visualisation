import React from "react";
import { shallow } from "enzyme";
import LoadingSpinner from "./LoadingSpinner";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../tests/config/testUtils";

describe("Expect <LoadingSpinner />", () => {
  it("to render correctly", () => {
    const wrapper = renderer.create(<LoadingSpinner title="title" />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not throw error with corrent props", () => {
    propTypeErrors(<LoadingSpinner title="title" />, { title: "title" });
  });

  it("to display prop 'title' in <p class='loading-title'", () => {
    const title = "title";
    const wrapper = shallow(<LoadingSpinner title={title} />);
    expect(wrapper.find("p.loading-title").text()).toEqual(
      `Loading ${title} ...`
    );
  });
});
