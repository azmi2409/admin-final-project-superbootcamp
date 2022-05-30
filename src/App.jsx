import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Protected from "./routes/Protected";

const Login = React.lazy(() => import("./views/pages/login/Login"));
const DefaultLayout = React.lazy(() => import("./layouts/DefaultLayout"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route path="*" element={<DefaultLayout />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
