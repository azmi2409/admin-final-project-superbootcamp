import React from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CImage,
} from "@coreui/react";
import { getAllProducts } from "../../lib/server/server";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate();
  const entries = React.useMemo(() => {
    return products.map((product) => {
      return {
        ...product,
      };
    });
  }, [products]);

  const getProducts = async () => {
    try {
      const { data } = await getAllProducts();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <CTable className="text-capitalize" align="middle" hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Thumbnail</CTableHeaderCell>
          <CTableHeaderCell scope="col">Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Price</CTableHeaderCell>
          <CTableHeaderCell scope="col">Description</CTableHeaderCell>
          <CTableHeaderCell scope="col">Category</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {entries?.map((product, index) => (
          <CTableRow
            onClick={() => {
              navigate(`/products/${product.ID}`);
            }}
            key={index}
          >
            <CTableDataCell>{index + 1}</CTableDataCell>
            <CTableDataCell>
              <CImage
                rounded
                thumbnail
                src={product.productImages}
                width={100}
                height={100}
              />
            </CTableDataCell>
            <CTableDataCell>{product.name}</CTableDataCell>
            <CTableDataCell>{product.price}</CTableDataCell>
            <CTableDataCell>{product.description}</CTableDataCell>
            <CTableDataCell>{product.Category.name}</CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
};

export default ProductList;
