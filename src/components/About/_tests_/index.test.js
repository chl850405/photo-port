import React from "react";
//render: Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
//cleanup:used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from "@testing-library/react";
//offers access to custom matchers that are used to test DOM elements.
import "@testing-library/jest-dom/extend-expect";
import About from "..";

//calls clean up function will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);
//describe: declares the component we're testing, by adding the following code:
describe("About component", () => {
  //renders About test
  // First Test: baseline to verify that the component is rendering.
  it("renders", () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot(); 
  });
})
