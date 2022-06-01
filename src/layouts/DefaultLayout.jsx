import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Loading from "../views/pages/Loading";

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light position-relative">
        <Header />
        <main className="body flex-grow-1 px-3 py-5">
          <Content />
        </main>
        <Loading />
      </div>
    </div>
  );
};

export default DefaultLayout;
