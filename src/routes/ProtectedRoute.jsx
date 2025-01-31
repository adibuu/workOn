import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/account");
    }
  }, [token, navigate]);

  return children;
};

export default ProtectedRoute;
