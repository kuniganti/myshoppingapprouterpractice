import { useRouteLoaderData } from "react-router-dom";
import ProductForm from "../Component/ProductForm";

function EditProduct() {
  const product = useRouteLoaderData("product-detail");
  return (
    <>
      <ProductForm method="put" product={product} />
    </>
  );
}

export default EditProduct;
