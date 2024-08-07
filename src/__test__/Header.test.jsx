import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

describe("HEADER COMPONENT", () => {
  test("Header Renders Correctly", () => {
    render(
      // has link inside so needs a routing context for test to work
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const homeText = screen.getByText("Home");
    expect(homeText).toBeInTheDocument();
  });

  
});
