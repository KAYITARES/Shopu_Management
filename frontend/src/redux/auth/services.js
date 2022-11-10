import axios from "axios";

export const loginService = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:3030/v1/shop/user/login",
      data
    );
    return res;
  } catch (error) {
    console.log("error:", error);
  }
};
