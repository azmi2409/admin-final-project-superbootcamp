import React from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../lib/server/server";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCardImage,
} from "@coreui/react";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = React.useState("");

  React.useEffect(() => {
    getProductById(id).then((v) => {
      console.log(v.data);
      setProduct(v.data);
    });
  }, [id]);

  return (
    <CCard className="mb-3 col-6">
      {product && (
        <>
          <CCardHeader>
            <CRow>
              <CCol
                xs="12"
                className="p-2 d-flex justify-content-center text-capitalize"
              >
                <h3>{product.name}</h3>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12" sm="12" md="6" lg="6">
                <CCardImage
                  src={`https://cwrfdvnvvcedqjylgvms.supabase.co/storage/v1/object/public/${product?.image_url[0]}`}
                  alt={product.name}
                  className="img-thumbnail"
                  style={{ maxHeight: "300px", width: "auto" }}
                />
              </CCol>
            </CRow>
          </CCardBody>
        </>
      )}
    </CCard>
  );
};

export default ProductPage;
