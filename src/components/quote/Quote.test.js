import React from "react";
import { shallow, mount } from "enzyme";
import Quote from "./Quote";
import Text from "../text/Text";
import Button from "../button/Button";

describe("Quote", () => {
  it("should render the loader", () => {
    const shallowWrapper = shallow(<Quote />);
    expect(shallowWrapper.find("div").props().className).toEqual("loader");
  });
});
