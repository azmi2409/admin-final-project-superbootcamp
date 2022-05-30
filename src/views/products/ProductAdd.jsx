import React from "react";
import { CForm, CCol, CFormInput, CButton, CFormTextarea } from "@coreui/react";

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
    image_url: "",
  };
  const [form, setForm] = React.useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    form.price = parseFloat(form.price);
    const response = await postProduct(token, form);
    if (response.status === 200) {
      alert("Product Added!");
      setForm(initialForm);
    }
  };

  const setImage = (image) => {
    setForm({ ...form, image_url: image });
  };

  return (
    <>
      <CForm className="row g-3" onSubmit={handleSubmit}>
        <CCol className="d-flex justify-content-center" xs="12">
          <CCol xs="6">
            <ImageDropzone cb={setImage} />
          </CCol>
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
      </CForm>
    </>
  );
};

export default ProductAdd;
