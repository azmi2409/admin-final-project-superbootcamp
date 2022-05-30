import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <main className="body flex-grow-1 px-3 py-5">
          <Content />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
