import React from "react";
import Menubar from "./components/Menubar/Menubar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contact/Contact";
import Explore from "./pages/Explore/Explore";

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
