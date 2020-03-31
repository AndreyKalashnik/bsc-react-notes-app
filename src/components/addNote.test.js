import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddNote from "./AddNote";

Enzyme.configure({ adapter: new Adapter() });

const enzymeWrapper = shallow(<AddNote />).dive();
const noteInputProps = enzymeWrapper.find("input").props();

describe("Add Note component", () => {
  it("should render", () => {
    expect(enzymeWrapper.find("section").hasClass("section")).toBe(true);
    expect(enzymeWrapper.find("h2").text()).toEqual("addNote");
    expect(noteInputProps.placeholder).toEqual("noteInput");
  });
});
