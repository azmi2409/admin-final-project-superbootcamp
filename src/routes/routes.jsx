import React from "react";
import Products from "./Products";

const ProductList = React.lazy(() => import("../views/products/ProductList"));
const ProductPage = React.lazy(() => import("../views/products/ProductPage"));
const ProductAdd = React.lazy(() => import("../views/products/ProductAdd"));

const routes = [
  { path: "/products", name: "Product List", element: ProductList },
  { path: "/products/:id", name: "Product Page", element: ProductPage },
  { path: "/products/add", name: "Add Product", element: ProductAdd },
];

export default routes;
