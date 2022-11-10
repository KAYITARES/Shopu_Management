import { createSlice } from "@reduxjs/toolkit";

const SalesSlice = createSlice({
  name: "sale",
  initialState: {
    sales: [],
    selectedSale: {},
    isFetching: false,
  },
  reducers: {
    setSales(state, action) {
      state.sales = action?.payload?.data;
    },
    setSelectedSale(state, action) {
      state.selectedSale = action.payload;
    },
    setIsFetching(state, action) {
      state.isFetching = action.payload;
    },
  },
});

export const SalesActions = SalesSlice.actions;
export default SalesSlice.reducer;
