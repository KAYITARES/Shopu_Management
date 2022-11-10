import axios from "axios";

export const productService = async () => {
  try {
    const res = await axios.get("http://localhost:3030/v1/shop/product");

    return res;
  } catch (error) {
    console.log("error:", error);
  }
};
