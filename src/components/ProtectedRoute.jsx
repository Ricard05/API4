// ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ExampleContext } from "../context/ExampleContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(ExampleContext);

  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    console.log("Hola");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
