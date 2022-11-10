import axios from "axios";

export const PurchaseServices = async () => {
  try {
    const res = await axios.get("http://localhost:3030/v1/shop/purchase");
    return res;
  } catch (error) {
    console.log(error);
  }
};
