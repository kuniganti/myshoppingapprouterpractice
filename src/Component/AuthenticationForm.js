import { Form, Link, useNavigate, useActionData } from "react-router-dom";
import classes from "./AuthenticationForm.module.css";

function AuthenticationForm() {
  const navigate = useNavigate();
  function loginActionCancelHandler() {
    navigate("..");
  }
  const data = useActionData();
  return (
    <>
      <Form method="post" className={classes.form}>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            id="username"
            name="UserName"
            placeholder="Please enter UserName"
          />
        </p>
        <p>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Please enter Password"
          />
        </p>
        <div className={classes.actions}>
          <button>Login</button>
          <button onClick={loginActionCancelHandler}>Cancel</button>
          <Link>Register User</Link>
        </div>
      </Form>
    </>
  );
}

export default AuthenticationForm;
