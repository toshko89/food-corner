import { Navigate } from "react-router-dom";
import { logout } from "../../services/authService.js";


export default function Logout() {
  logout();
  return (
    <Navigate to="/" />
  );
}