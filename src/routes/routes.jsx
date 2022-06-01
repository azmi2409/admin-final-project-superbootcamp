import React from "react";

const ProductList = React.lazy(() => import("../views/products/ProductList"));
const ProductPage = React.lazy(() => import("../views/products/ProductPage"));
const ProductAdd = React.lazy(() => import("../views/products/ProductAdd"));
const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const Page404 = React.lazy(() => import("../views/pages/Page404"));

const routes = [
  { path: "/products", name: "Product List", element: ProductList },
  { path: "/products/:id", name: "Product Page", element: ProductPage },
  { path: "/products/add", name: "Add Product", element: ProductAdd },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "*", name: "Page 404", element: Page404 },
];

export default routes;
