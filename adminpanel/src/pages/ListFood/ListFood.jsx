import axios from "axios";
import React, { useEffect, useState } from "react";
import "../ListFood/ListFood.css";
import { toast } from "react-toastify";
import { getFoodList } from "../../service/FoodService";
import { deleteFood } from "../../service/FoodService";

const ListFood = () => {
  const [list, setList] = useState([]);

  const fetch = async () => {
    try {
      const response = await getFoodList();
      setList(response);
    } catch (error) {
      toast.error("Error while fetching food!");
    }
  };

  const removeFood = async (id) => {
    try {
      const success = await deleteFood(id);
      if (success) {
        toast.success("Food Item deleted!");
        await fetch();
      } else {
        toast.error("Failed to delete an item");
      }
    } catch (error) {
      toast.error("Error while removing food!");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  // const toggleSelect = (index) => {
  //   setSelected((prev) => ({
  //     ...prev,
  //     [index]: !prev[index],
  //   }));
  // };

  return (
    <div className="container">
      <div className="row g-4 mb-2">
        {list.map((food, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card pricing-card mt-2 p-3 text-center"
              // style={{ backgroundColor: "#FFE5B4" }}
            >
              <img
                src={`data:image/${food.img_type};base64, ${food.image}`}
                alt={food.name}
                className="img-fluid mx-auto d-block mb-3"
                style={{
                  height: "120px",
                  width: "200px",
                  objectFit: "cover",
                  borderRadius: "10%",
                }}
              />
              <h5 className="mb-2">{food.name}</h5>
              <p className="mb-1">Category: {food.category}</p>
              <p className="mb-3">Price: ₹{food.price}.00</p>
              <button
                style={{ width: "150px", margin: "0 auto", display: "block" }}
                className={`btn ${"btn-danger"}`}
                onClick={() => removeFood(food.id)}
              >
                Remove
                {/* {selected[index] ? "Deselect" : "Select"} */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListFood;
