import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import ProductList from "../components/productlist/ProductList";
import { getProducts } from "../../src/api";
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

describe("PRODUCT LIST COMPONENT", () => {
  test("Product List Renders Correctly", () => {
    useShoppingCart.mockImplementation(mockUseShoppingCart([]));

    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <ProductList />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
    const productListHeading = screen.getByRole("heading", {
      name: /product list/i,
    });
    expect(productListHeading).toBeInTheDocument();
  });
  test("fetches and displays products", async () => {
    useShoppingCart.mockImplementation(mockUseShoppingCart([]));

    const products = getProducts();

    render(
      <MemoryRouter>
        <ShoppingCartProvider>
          <ProductList />
        </ShoppingCartProvider>
      </MemoryRouter>
    );

    // Wait for the products to be fetched and rendered
    await waitFor(() => {
      products.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
        expect(
          screen.getAllByText(`$${product.price.toFixed(2)}`).length
        ).toBeGreaterThan(0);
      });
    });
  });
  test("Alert User If Item Already In cart", async () => {
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
          <ProductList />
        </ShoppingCartProvider>
      </MemoryRouter>
    );
    await waitFor(() => {
      const addButtons = screen.getAllByText(/Add to Cart/i);
      expect(addButtons.length).toBeGreaterThan(0); // Ensure buttons are rendered

      const firstButton = addButtons[0];
      fireEvent.click(firstButton);

      expect(
        screen.getByText(
          "Item Already exists, Please go to cart to adjust quantity!"
        )
      ).toBeInTheDocument();
    });
  });
});
