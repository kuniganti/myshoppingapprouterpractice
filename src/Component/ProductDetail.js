import { Link, useSubmit } from "react-router-dom";
import classes from "./ProductDetail.module.css";

function ProductDetail({ product }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm(
      "Are you sure you want to delete the product?"
    );

    if (proceed) {
      submit(null, { method: "delete" });
    }
  }
  return (
    <>
      <article className={classes.product}>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <time>{product.Price}</time>
        <p>{product.Category}</p>
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      </article>
    </>
  );
}

export default ProductDetail;
