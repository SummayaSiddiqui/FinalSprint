import { render, screen } from "@testing-library/react";
import Checkout from "../components/checkout/CheckOut";
import { MemoryRouter } from "react-router";
import { ShoppingCartProvider } from "../components/shoppingcartcontext/ShoppingCartContext";

// Mock implementation of the useShoppingCart hook
const mockUseShoppingCart = (cartItems) => ({
  cartItems,
});

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
  test("displays 'Add Items to Cart' button when cart is empty", () => {
    // Mock useShoppingCart to return an empty cart
    jest.mock(
      "../components/shoppingcartcontext/ShoppingCartContext",
      () => ({
        ...jest.requireActual(
          "../components/shoppingcartcontext/ShoppingCartContext"
        ),
        useShoppingCart: () => mockUseShoppingCart([]),
      })
    );

    // Render the Checkout component with the mocked context
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <Checkout />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    const addButton = screen.getByRole("link", {
      name: /Add Items to Cart/i,
    });
    expect(addButton).toBeInTheDocument();
  });
});
