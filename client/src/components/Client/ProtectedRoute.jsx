import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();

  console.log("ProtectedRoute - token:", token);
  
  if (!token) {
    console.log("ProtectedRoute - No token, redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  return children;
}
