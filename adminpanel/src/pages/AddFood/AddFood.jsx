import React, { useEffect, useState } from "react";
import { assests } from "../../assets/assets";
import axios from "axios";
import { addFood } from "../../service/FoodService";
import { toast } from "react-toastify";

const AddFood = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Pizza",
    img_type: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0].name);
    const name = e.target.files[0].name;
    const extension = name.split(".").pop().toLowerCase();
    setFormData((formData)=>({...formData, img_type: extension}))
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if(image == null)
      {
        toast.warn("Select an image")
      }
      await addFood(formData, image);
      setFormData({ name: "", description: "", category: "Pizza", price: "" });
      setImage(null);
      toast.success("Food Added successfully!");
    } catch (error) {
      toast.error("Failed to add Food!");
    }
  };
  return (
    <div className="mx-2 mt-2">
      <div className="row mt-2">
        <div className=" card col-md-4 ">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4 mt-2">Add Food</h2>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <img
                  src={image ? URL.createObjectURL(image) : assests.upload}
                  width={60}
                  
                />
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                required
                hidden
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
                placeholder="Sandwich"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="email"
                name="description"
                required
                onChange={handleChange}
                value={formData.description}
                placeholder="Write content here..."
                rows={4}
                cols={5}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="form-control"
                onChange={handleChange}
                value={formData.category}
              >
                <option value="Pizza">Pizza</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Burger">Burger</option>
                <option value="Veg-Noodles">Veg-Noodles</option>
                <option value="Pasta">Pasta</option>
                <option value="Rolls">Rolls</option>
                <option value="Biryani">Biryani</option>
                <option value="Ice-cream">Ice-cream</option>
                <option value="Cake">Cake</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                required
                onChange={handleChange}
                value={formData.price}
                placeholder="&#8377;200"
              />
            </div>

            <div className="d-grid mb-2">
              <button type="submit" className="btn btn-primary btn-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
