import React from "react";
import { CFooter } from "@coreui/react";

const Footer = () => {
  return (
    <CFooter fixed="bottom">
      <div
        style={{ width: "100%" }}
        className="d-flex justify-content-center align-items-center"
      >
        <span>Made By </span>
        <a target="_blank" href="https://azmi.web.id">
          Azmi
        </a>{" "}
        © 2022.
      </div>
    </CFooter>
  );
};

export default Footer;
