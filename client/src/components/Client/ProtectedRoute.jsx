import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();

  console.log("ProtectedRoute - token:", token);
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
