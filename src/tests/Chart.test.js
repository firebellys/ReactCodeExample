import React from "react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";

import App from "../App";

describe("ChartContainer tests", () => {
  it("should have a chart displayed", () => {
    const { getByText } = render(<App />);

    // Navigate to Chart component
    fireEvent.click(getByText("Charts"));
    fireEvent.click(getByText("Login"));

    expect(getByText("Chart Area")).toBeInTheDocument();
  });
});
