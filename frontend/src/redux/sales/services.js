import axios from "axios";

export const SalesServices = async () => {
  try {
    console.log("____+++++++++++++++++++");
    const res = await axios.get("http://localhost:3030/v1/shop/sales");
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
