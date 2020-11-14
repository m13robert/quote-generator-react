import React from "react";
import { shallow } from "enzyme";
import Quote from "./Quote";
import Text from "../text/Text";
import Button from "../button/Button";

describe("Quote", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Quote />)));

  it("should render 4 div", () => {
    expect(wrapper.find("div").length).toEqual(4);
  });

  it("should render 2 Text", () => {
    expect(wrapper.find(Text).length).toEqual(2);
  });

  it("should render an icon", () => {
    expect(wrapper.find("i").length).toEqual(1);
  });

  it("should render 2 Button", () => {
    expect(wrapper.find(Button).length).toEqual(2);
  });
});
