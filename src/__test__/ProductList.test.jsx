import { render, screen, waitFor } from "@testing-library/react";
import ProductList from "../components/productlist/ProductList";
import { getProducts } from "../../src/api";
import { MemoryRouter } from "react-router";
import { ShoppingCartProvider } from "../components/shoppingcartcontext/ShoppingCartContext";



describe("PRODUCT LIST COMPONENT", () => {
  test("Product List Renders Correctly", () => {
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
  it("fetches and displays products", async () => {
   
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
          (screen.getAllByText(`$${product.price.toFixed(2)}`).length)
        ).toBeGreaterThan(0);
      });
    });
  });
});
