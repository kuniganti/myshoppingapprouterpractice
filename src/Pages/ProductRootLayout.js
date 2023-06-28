import ProductNavigation from "./ProductNavigation";
import { Outlet } from "react-router-dom";

function ProductRootLayout() {
  return (
    <>
      <ProductNavigation />
      <Outlet />
    </>
  );
}

export default ProductRootLayout;
