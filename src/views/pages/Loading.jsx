import React from "react";
import { UserContext } from "../../context";
import { CSpinner } from "@coreui/react";

const Loading = () => {
  const { isLoading } = React.useContext(UserContext);
  const classes = isLoading
    ? "position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-dark text-white flex-column"
    : "d-none";
  return (
    <div className={classes}>
      <CSpinner color="primary" />
      <h1>Loading...</h1>
    </div>
  );
};

export default React.memo(Loading);
