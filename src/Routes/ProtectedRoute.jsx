import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { user } = UseAuth();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
