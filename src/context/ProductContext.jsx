import React from "react";
import { getAllProducts } from "../lib/server/server";

export const ProductContext = React.createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllProducts();
      return data;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        console.log(products);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, isLoading, isError, getProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
