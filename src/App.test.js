import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const enzymeWrapper = shallow(<App />).dive();

describe("App component", () => {
  it("should render", () => {
    expect(enzymeWrapper.find("section").hasClass("hero")).toBe(true);
    expect(enzymeWrapper.find("h1").text()).toEqual("Notes App");
  });
});
