import { NavLink } from "react-router-dom";
import classes from "./ProductsNavigation.module.css";
function ProductsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"new"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Add Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProductsNavigation;
