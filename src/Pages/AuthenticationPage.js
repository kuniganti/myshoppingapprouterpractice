import AuthenticationForm from "../Component/AuthenticationForm";
import { redirect, json } from "react-router-dom";
function AuthenticationPage() {
  return <AuthenticationForm />;
}

export default AuthenticationPage;

export async function action({ request, params }) {
  const data = await request.formData();

  console.log("Authentication action log was called!!");
  console.log(data.get("UserName"));
  console.log(data.get("Password"));

  const userLoginDetails = {
    UserName: data.get("UserName"),
    Password: data.get("Password"),
  };
  const loginUrl = "http://localhost:3001/user/login";
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userLoginDetails),
  });
  console.log(response);
  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }
  const resData = await response.json();
  const token = resData.token;
  localStorage.setItem("token", token);

  return redirect("/products");
}
