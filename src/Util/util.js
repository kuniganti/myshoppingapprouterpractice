import { redirect } from "react-router-dom";

export function getAuthenticationToken() {
  const token = localStorage.getItem("token");
  if (!token || token === "" || token === null) {
    console.log("No Token Exists");
  }

  return token;
}

export function tokenloader() {
  return getAuthenticationToken();
}

export function checkAuthLoader() {
  const token = getAuthenticationToken();

  if (!token) {
    return redirect("/authentication");
  }

  return token;
}
