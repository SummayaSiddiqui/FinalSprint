import { render, screen } from "@testing-library/react";
import Checkout from "../components/checkout/CheckOut";
import { MemoryRouter } from "react-router";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "../components/shoppingcartcontext/ShoppingCartContext";

// Mock implementation of the useShoppingCart hook
const mockUseShoppingCart = (cartItems) => () => ({
  cartItems,
});

// Mock the entire module at the top level
jest.mock("../components/shoppingcartcontext/ShoppingCartContext", () => {
  const actualModule = jest.requireActual(
    "../components/shoppingcartcontext/ShoppingCartContext"
  );
  return {
    ...actualModule,
    useShoppingCart: jest.fn(),
  };
});

describe("CHECKOUT COMPONENT", () => {
  test("Checkout Renders Correctly", () => {
    useShoppingCart.mockImplementation(mockUseShoppingCart([]));

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
    useShoppingCart.mockImplementation(mockUseShoppingCart([]));

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

  test("'Add items to cart' disappears when cart is not empty", () => {
    useShoppingCart.mockImplementation(
      mockUseShoppingCart([
        {
          id: 1,
          name: "Sapiens: A Brief History of Humankind",
          price: 19.99,
          quantity: 1,
          description:
            "A book by Yuval Noah Harari that explores the history of humankind from the Stone Age to the present.",
          image: "/images/sapiens.png",
          summary:
            "It offers a fascinating journey through the entirety of human history",
        },
      ])
    );

    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <Checkout />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    const addButton = screen.queryByRole("link", {
      name: /Add Items to Cart/i,
    });
    expect(addButton).not.toBeInTheDocument();
  });
});
