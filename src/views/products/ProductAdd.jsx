import React from "react";
import {
  CForm,
  CCol,
  CFormInput,
  CButton,
  CFormTextarea,
  CCard,
  CCardHeader,
  CCardBody,
  CCardImage,
  CRow,
} from "@coreui/react";

import { postProduct } from "../../lib/server/server";
import { UserContext } from "../../context/UserContext";
import ImageDropzone from "../../components/ImageDropzone";

const ProductAdd = () => {
  const { token } = React.useContext(UserContext);
  const initialForm = {
    name: "",
    description: "",
    price: 0,
    category: "",
    sku: "",
    image_url: ["", "", ""],
  };
  const [form, setForm] = React.useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    form.price = parseFloat(form.price);
    form.image_url = form.image_url.filter((v) => v !== "");
    const response = await postProduct(token, form);
    if (response.status === 200) {
      alert("Product Added!");
      setForm(initialForm);
    }
  };

  const setImage = (image) => {
    setForm({ ...form, image_url: [image, ...form.image_url] });
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <CRow>
            <CCol xs="12" className="p-2 d-flex justify-content-center">
              <h3>Add Product</h3>
            </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CRow className="g-3">
              <CCol xs="12">
                <CRow>
                  <CCol xs="4">
                    <ImageDropzone cb={setImage} />
                    <p className="text-center">Image 1</p>
                  </CCol>
                  <CCol xs="4">
                    <ImageDropzone cb={setImage} />
                    <p className="text-center">Image 2</p>
                  </CCol>
                  <CCol xs="4">
                    <ImageDropzone cb={setImage} />
                    <p className="text-center">Image 3</p>
                  </CCol>
                </CRow>
              </CCol>
              <CCol md={6}>
                <CFormInput
                  onChange={handleChange}
                  name="name"
                  label="Product Name"
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  onChange={handleChange}
                  name="price"
                  type="number"
                  label="Price"
                />
              </CCol>
              <CCol xs={12}>
                <CFormTextarea
                  onChange={handleChange}
                  name="description"
                  label="Description"
                />
              </CCol>
              <CCol xs={6}>
                <CFormInput onChange={handleChange} name="sku" label="SKU" />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  onChange={handleChange}
                  name="category"
                  label="Category"
                />
              </CCol>
              <CCol xs={12}>
                <CButton type="submit">Submit</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default ProductAdd;
