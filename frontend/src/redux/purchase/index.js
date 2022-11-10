import { createSlice } from "@reduxjs/toolkit";

const PurchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    purchases: [],
    selectedPurchase: {},
    isFetching: false,
  },
  reducers: {
    setPurchase(state, action) {
      state.purchases = action.payload?.data;
    },
    setSelected(state, action) {
      state.selectedPurchase = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});
export const PurchaseActions = PurchaseSlice.actions;
export default PurchaseSlice.reducer;
