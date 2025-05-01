import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddFood from "./pages/AddFood/AddFood";
import Sidebar from "./components/sidebar/Sidebar";
import Menubar from "./components/Menubar/Menubar";
import ListFood from "./pages/ListFood/ListFood";
import Orders from "./pages/Orders/Orders";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [sideBarVisible, setSideBarVisible] = useState(true);

  const toggleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  };
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar sideBarVisible={sideBarVisible} />

      <div id="page-content-wrapper">
        <Menubar toggleSideBar={toggleSideBar} />
        <ToastContainer />
        <div className="container-fluid">
          <Routes>
            <Route path="/add" element={<AddFood />} />
            <Route path="/list" element={<ListFood />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<ListFood />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
