import React, { useEffect } from "react";
import { UserContext } from "../../../context/";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { logoutAction } = React.useContext(UserContext);
  useEffect(() => {
    logoutAction();
  }, []);
  return <Navigate to="/login" />;
};

export default Logout;
