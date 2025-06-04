import React, { useRef } from "react";
import { categories } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 200; // scroll left by 200px
    } else {
      current.scrollLeft += 200; // scroll right by 200px
    }
  };

  return (
    <div className="explore-menu position-relative mt-2">
      <h1 className="d-flex align-items-center justify-content-between">
        Explore Our Menu
        <div className="d-flex gap-4">
          <i
            className="bi bi-arrow-left-circle-fill scroll-icon"
            onClick={() => scroll("left")}
          ></i>
          <i
            className="bi bi-arrow-right-circle-fill scroll-icon"
            onClick={() => scroll("right")}
          ></i>
        </div>
      </h1>
      <p>Explore curated lists of dishes from top categories</p>
      <div
        className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list "
        ref={scrollRef}
      >
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
      <hr/>
    </div>
  );
};

export default ExploreMenu;
