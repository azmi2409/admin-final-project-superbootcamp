import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Protected = () => {
  const { token } = React.useContext(UserContext);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default Protected;
