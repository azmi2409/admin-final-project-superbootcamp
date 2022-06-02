import React from "react";
import { CButton } from "@coreui/react";

export const ActionButton = ({ color, cb, children, size }) => {
  return (
    <CButton color={color} onClick={cb} size={size} variant="outline">
      {children}
    </CButton>
  );
};
