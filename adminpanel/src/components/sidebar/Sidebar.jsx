import React from "react";
import { Link } from "react-router-dom";
import AddFood from "../../pages/AddFood/AddFood";
import { assests } from "../../assets/assets.js";

const Sidebar = ({ sideBarVisible }) => {
  return (
    <div
      className={`border-end bg-white ${sideBarVisible ? "" : "hidden"}`}
      id="sidebar-wrapper"
    >
      <div className="sidebar-heading border-bottom bg-light">
        <img src={assests.logo} height={32} width={32} />
      </div>
      <div className="list-group list-group-flush">
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/add"
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add Food
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/list"
        >
          <i className="bi bi-list-ul me-2"></i>
          List Food
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/orders"
        >
          <i className="bi bi-cart2 me-2"></i>
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
