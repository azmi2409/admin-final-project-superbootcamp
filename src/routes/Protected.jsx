import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protected = () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default Protected;
