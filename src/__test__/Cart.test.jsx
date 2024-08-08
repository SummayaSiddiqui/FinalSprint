import { render, screen } from "@testing-library/react";
import ShoppingCart from "../components/shoppingcart/ShoppingCart";
import { MemoryRouter } from "react-router";
import { ShoppingCartProvider } from "../components/shoppingcartcontext/ShoppingCartContext";

describe("CART COMPONENT", () => {
  test('Renders Component Correctly', ()=>{
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <ShoppingCart />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
    const cartHeading = screen.getByRole("heading", { name: "Shopping Cart" });
    expect(cartHeading).toBeInTheDocument()
  
  })
  test("Displays empty cart message when no items are in the cart", () => {
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <ShoppingCart />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
    const emptyMessage = screen.getByText("Opps, Your Cart is Empty!");
    expect(emptyMessage).toBeInTheDocument();
  });
});
