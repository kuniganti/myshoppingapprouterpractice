import { NavLink, useLoaderData, Form } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const token = useLoaderData();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Profile
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink
                to={"/authentication"}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
