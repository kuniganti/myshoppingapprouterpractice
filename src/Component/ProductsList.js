import classes from "./ProductsList.module.css";
import { Link } from "react-router-dom";

function ProductsList({ products }) {
  return (
    <div className={classes.products}>
      <h1>All Products</h1>
      <ul className={classes.list}>
        {products.map((product) => (
          <li key={product.id} className={classes.item}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <div className={classes.content}>
                <h2>{product.name}</h2>
                <h2>Rs.{product.Price}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;
