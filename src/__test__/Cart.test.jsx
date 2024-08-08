import { render, screen } from "@testing-library/react";
import ShoppingCart from "../components/shoppingcart/ShoppingCart";
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
describe("CART COMPONENT", () => {
  test("Renders Component Correctly", () => {
    useShoppingCart.mockImplementation(mockUseShoppingCart([]));
    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <ShoppingCart />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
    const cartHeading = screen.getByRole("heading", { name: "Shopping Cart" });
    expect(cartHeading).toBeInTheDocument();
  });
  test("Displays empty cart message when no items are in the cart", () => {
    useShoppingCart.mockImplementation(mockUseShoppingCart([]));

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
  test("Displays Cart Items When cart is not empty", () => {
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
        {
          id: 2,
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
          <ShoppingCart />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    const productCards= screen.getAllByRole('listitem')
    expect(productCards).toHaveLength(2)
  });
});
