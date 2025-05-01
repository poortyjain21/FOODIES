import axios from "axios";
import { toast } from "react-toastify";
const API_URL = "http://localhost:8082/api/foods";

export const addFood = async (formData, image) => {
  const data = new FormData();
  data.append("name", formData.name);
  data.append("description", formData.description);
  data.append("category", formData.category);
  data.append("price", formData.price);
  data.append("image", image);
  data.append("img_type", formData.img_type);
  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("response from backend ", response);
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getFoodList = async () => {
  try {
    const response = await axios.get("http://localhost:8082/api/readfoods");
    return response.data;
  } catch (errro) {
    console.log("Error while fetching food (Msg from FoodService.js)", error);
    throw error;
  }
};

export const deleteFood = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8082/${id}`);
    return response.status === 200;
  } catch (error) {
    console.log("Error while deleting foor", error);
    throw error;
  }
};
