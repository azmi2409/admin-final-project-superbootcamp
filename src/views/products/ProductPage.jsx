import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../lib/server/server";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState("");

  React.useEffect(() => {
    getProductById(id).then((v) => setProduct(v.data));
  }, [id]);

  return (
    <div className="col">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
