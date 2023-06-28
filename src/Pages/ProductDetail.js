import { json, useRouteLoaderData, redirect } from "react-router-dom";
import ProductDetail from "../Component/ProductDetail";
function ProductDetailPage() {
  const product = useRouteLoaderData("product-detail");
  console.log("Inside the Product Detail Page");
  console.log(product);
  return <ProductDetail product={product} />;
}

export default ProductDetailPage;

export async function loadProduct({ request, params }) {
  console.log(params);
  const id = params.productId;
  const response = await fetch("http://localhost:3001/products/" + id);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected product." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    console.log(resData);
    return resData;
  }
}

export async function action({ params, request }) {
  const productId = params.productId;
  const response = await fetch("http://localhost:3001/products/" + productId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Could not delete product." },
      {
        status: 500,
      }
    );
  }
  return redirect("/products");
}
