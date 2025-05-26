import React from "react";
import { categories } from "../../assets/assets";
import "./ExploreMenu.css"

const ExploreMenu = () => {
  return (
    <div className="explore-menu position-relative mt-2">
      <h1 className="d-flex align-items-center justify-content-between">
        Explore Our Menu
        <div className="d-flex gap-4">
          <i className="bi bi-arrow-left-circle-fill scroll-icon"></i>
          <i className="bi bi-arrow-right-circle-fill scroll-icon"></i>
        </div>
      </h1>
      <p>Explore curated lists of dishes from top categories</p>
      <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list ">
        {categories.map((item, index) => {
          return (
            <div key={index} className="text-center explore-menu-list-item">
              <img
                src={item.icon}
                alt={item.category}
                style={{ height: 120, width: 120 }}
                className="rounded-circle"
              />
              <p className="mt-2 fw-bold">{item.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
