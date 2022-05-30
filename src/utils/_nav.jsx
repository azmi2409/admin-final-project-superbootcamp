import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilLibraryAdd,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilList,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Products",
  },
  {
    component: CNavItem,
    name: "Products List",
    to: "/products",
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Add Product",
    to: "/products/add",
    icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Product Categories",
    to: "/products/categories",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Orders",
  },
  {
    component: CNavItem,
    name: "Orders List",
    to: "/orders",
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Users",
  },
  {
    component: CNavItem,
    name: "Users List",
    to: "/users",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Add User",
    to: "/users/add",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
];

export default _nav;
