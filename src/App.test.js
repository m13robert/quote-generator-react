import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Quote from "./components/quote/Quote";

describe("App", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));
  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should render Quote", () => {
    expect(wrapper.find(Quote).length).toEqual(1);
  });
});
