import { Outlet } from "react-router-dom";
import ProductsNavigation from "./ProductsNavigation";
function ProductsRootLayout() {
  return (
    <>
      <ProductsNavigation />
      <Outlet />
    </>
  );
}

export default ProductsRootLayout;
