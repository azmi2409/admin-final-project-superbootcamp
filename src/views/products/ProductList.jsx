import React from "react";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CTableBody,
  CImage,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
} from "@coreui/react";
import { getAllProducts } from "../../lib/server/server";
import { useNavigate } from "react-router-dom";
import { formatCurrencyToRP, formatDate } from "../../utils/formatter";
import { ActionButton } from "../../components/ActionButton";
import { UserContext, useUserContext } from "../../context";

const ProductList = () => {
  const { setIsLoading } = useUserContext();
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
    setIsLoading(true);
    document.title = "Products List";
    try {
      const { data } = await getAllProducts();
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  React.useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <CCard className="mb-3">
      <CCardHeader>
        <CRow>
          <CCol xs="12" className="p-2 d-flex justify-content-center">
            <h3>Product List</h3>
          </CCol>
        </CRow>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol xs="12" sm="12" md="12" lg="12">
            <CTable className="text-capitalize" align="middle" hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">SKU</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Thumbnail</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Listing Time</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {entries?.map((product) => (
                  <CTableRow key={product.sku}>
                    <CTableDataCell>{product.sku}</CTableDataCell>
                    <CTableDataCell>
                      <CImage
                        rounded
                        thumbnail
                        src={`https://cwrfdvnvvcedqjylgvms.supabase.co/storage/v1/object/public/${product.image_url[0]}`}
                        width={100}
                        height={100}
                      />
                    </CTableDataCell>
                    <CTableDataCell>{product.name}</CTableDataCell>
                    <CTableDataCell>
                      {formatCurrencyToRP(product.price)}
                    </CTableDataCell>
                    <CTableDataCell
                      style={{ maxWidth: "150px" }}
                      className="text-truncate"
                    >
                      {product.description}
                    </CTableDataCell>
                    <CTableDataCell>{product.category}</CTableDataCell>
                    <CTableDataCell>
                      {formatDate(product.created_at)}
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="d-flex flex-column justify-content-center align-items-center gap-1">
                        <ActionButton
                          cb={() => {
                            navigate(`/products/${product.id}/`);
                          }}
                          color="info"
                          size="sm"
                        >
                          View
                        </ActionButton>
                        <ActionButton
                          cb={() => {
                            navigate(`/products/${product.id}/edit`);
                          }}
                          color="warning"
                          size="sm"
                        >
                          Edit
                        </ActionButton>
                        <ActionButton
                          cb={() => {
                            navigate(`/products/${product.id}/delete`);
                          }}
                          color="danger"
                          size="sm"
                        >
                          Delete
                        </ActionButton>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  );
};

export default React.memo(ProductList);
