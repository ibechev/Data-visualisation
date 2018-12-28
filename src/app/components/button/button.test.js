import React from "react";
import { mount } from "enzyme";
import Button from "./Button";
import renderer from "react-test-renderer";
import { propTypeErrors } from "../../../../tests/config/testUtils";

describe("Expect <Button />", () => {
  const childrenText = "Some text";
  const setup = (testProps = {}) => {
    const props = {
      ...testProps
    };
    return mount(
      <Button {...props}>
        <p>{childrenText}</p>
      </Button>
    );
  };

  it("to render correectly", () => {
    const wrapper = renderer
      .create(
        <Button>
          <p>Some text</p>
        </Button>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("to not thrwo error with correct props", () => {
    propTypeErrors(
      <Button>
        <p>Some text</p>
      </Button>,
      {}
    );
    propTypeErrors(
      //eslint-disable-next-line
      <Button noBody onClick={() => {}}>
        <p>Some text</p>
      </Button>,
      { noBody: true, onClick: () => {} }
    );
    propTypeErrors(
      //eslint-disable-next-line
      <Button noBody onClick={() => {}}>
        <p>Some text</p>
      </Button>,
      { bgc: "primary", onClick: () => {} }
    );
    propTypeErrors(
      //eslint-disable-next-line
      <Button noBody onClick={() => {}}>
        <p>Some text</p>
      </Button>,
      { bgc: "primary-light", onClick: () => {} }
    );
  });

  describe("when prop 'noBody' is declared", () => {
    const wrapper = setup({ noBody: true });

    it("to set class 'no-body' when prop 'noBody' of the <button />", () => {
      expect(wrapper.find("button").hasClass("no-body")).toEqual(true);
    });

    it("to not set classes 'primary' or 'primary-light' of the <button />", () => {
      expect(wrapper.find("button").hasClass("primary")).toEqual(false);
      expect(wrapper.find("button").hasClass("primary-light")).toEqual(false);
    });
  });

  describe("when prop 'noBody' is not declared", () => {
    const wrapper = setup();

    it("to not set class 'no-body' of <button />", () => {
      expect(wrapper.find("button").hasClass("no-body")).toEqual(false);
    });

    it("to set class 'primary' when it's passed as prop 'bgc'", () => {
      expect(wrapper.find("button").hasClass("primary")).toEqual(true);
    });
  });

  it("to call prop 'onClick' when the button is clicked and prop 'onClick' has been passed as function", () => {
    const clickSpy = jest.fn();
    const wrapper = setup({ onClick: clickSpy });
    wrapper.find("button").simulate("click");
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it("to render any passed children", () => {
    const wrapper = setup();
    expect(wrapper.find("p").text()).toEqual(childrenText);
  });

  it("to set prop 'noBody' to 'false', 'bgc' to 'primary' and 'onClick' to 'null' by default (without any passed props)", () => {
    const wrapper = setup();
    expect(wrapper.props().bgc).toEqual("primary");
    expect(wrapper.props().noBody).toEqual(false);
    expect(wrapper.props().onClick).toEqual(null);
  });
});
