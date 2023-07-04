import { redirect } from "react-router-dom";

export function LogoutAction() {
  console.log("Logout action was called");
  localStorage.removeItem("token");
  return redirect("/");
}
