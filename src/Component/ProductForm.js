import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
  json,
  redirect,
} from "react-router-dom";

import classes from "./ProductForm.module.css";

function ProductForm({ method, product }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={product ? product.name : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={product ? product.image : ""}
        />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="test"
          name="price"
          required
          defaultValue={product ? product.Price : ""}
        />
      </p>
      <p>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          required
          defaultValue={product ? product.Category : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>{isSubmitting ? "Submitting..." : "Save"}</button>
      </div>
    </Form>
  );
}

export default ProductForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const productData = {
    name: data.get("name"),
    image: data.get("image"),
    Price: data.get("price"),
    Category: data.get("category"),
  };

  let url = "http://localhost:3001/products";

  if (method === "PUT") {
    const productId = params.productId;
    url = "http://localhost:3001/products/" + productId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save product." }, { status: 500 });
  }

  return redirect("/products");
}
