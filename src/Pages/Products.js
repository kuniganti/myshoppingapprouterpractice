import { json, useLoaderData } from "react-router-dom";
import ProductsList from "../Component/ProductsList";

function Products() {
  const products = useLoaderData();
  return <ProductsList products={products}></ProductsList>;
}

export default Products;

export async function loadProducts() {
  const response = await fetch("http://localhost:3001/products");
  console.log(response);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch products." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData;
  }
}
