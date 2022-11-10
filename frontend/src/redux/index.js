import { configureStore } from "@reduxjs/toolkit";
import product from "./product";
import auth from "./auth";
import sale from "./sales";
import purchase from "./purchase";
const store = configureStore({
  reducer: {
    auth: auth,
    product: product,
    sale: sale,
    purchase: purchase,
  },
});
export default store;
