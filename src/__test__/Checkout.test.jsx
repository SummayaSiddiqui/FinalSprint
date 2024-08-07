import { render, screen } from "@testing-library/react";
import Checkout from "../components/checkout/CheckOut";
import { MemoryRouter } from "react-router";
import { ShoppingCartProvider } from "../components/shoppingcartcontext/ShoppingCartContext";

describe("CHECKOUT COMPONENT", () => {
  test("Checkout Renders Correctly", () => {
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <Checkout />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { name: "Checkout" });
    expect(heading).toBeInTheDocument();
  });
});
