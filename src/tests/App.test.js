import React from "react";
import App from "../App";
import { render } from "@testing-library/react";

describe("App tests", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);

    expect(getByText("Starting Page")).toBeInTheDocument();
  });
});
