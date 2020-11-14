import React from "react";
import { shallow } from "enzyme";
import Text from "./Text";

describe("Text", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Text />)));
  it("should render a span", () => {
    expect(wrapper.find("span").length).toEqual(1);
  });
});
