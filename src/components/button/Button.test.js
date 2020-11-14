import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<Button />)));
  it("should render a button", () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("should render without an icon by default", () => {
    expect(wrapper.find("i").length).toEqual(0);
  });

  it("should render with icon", () => {
    const icon = "icon";
    wrapper.setProps({ icon });
    expect(wrapper.find("i").length).toEqual(1);
  });
});
