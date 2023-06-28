import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function ProductNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={""}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              edit
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"delete"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Delete
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProductNavigation;
