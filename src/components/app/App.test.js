import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("<App /> component", () => {
  test("renders navbar", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });
})
