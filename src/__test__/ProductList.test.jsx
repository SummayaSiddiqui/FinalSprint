import { render, screen } from "@testing-library/react";
import ProductList from "../components/productlist/ProductList";
import { MemoryRouter } from "react-router";
import { ShoppingCartProvider } from "../components/shoppingcartcontext/ShoppingCartContext";


describe("PRODUCT LIST COMPONENT", ()=>{
    test('Product List Renders Correctly', () => {
         render(
           <MemoryRouter>
             <ShoppingCartProvider>
               <ProductList />
             </ShoppingCartProvider>
           </MemoryRouter>
         );
         const productListHeading = screen.getByRole('heading', {name: /product list/i})
         expect(productListHeading).toBeInTheDocument()
        }
        )
})