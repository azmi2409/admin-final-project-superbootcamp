import React from "react";
import { Routes, Route } from "react-router-dom";

const ProductList = React.lazy(() => import("../views/products/ProductList"));

const Products = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
};

export default Products;
