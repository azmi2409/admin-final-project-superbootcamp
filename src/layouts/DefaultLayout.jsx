import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Loading from "../views/pages/Loading";
import Footer from "../components/Footer";

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light position-relative">
        <Header />
        <main className="body flex-grow-1">
          <Content />
        </main>
        <Footer />
        <Loading />
      </div>
    </div>
  );
};

export default DefaultLayout;
