import { SalesServices } from "./services";
import { SalesActions } from "./index";

export const getSalesActions = () => async (dispatch) => {
  console.log(".......................................");
  dispatch(SalesActions.setIsFetching(true));
  try {
    const res = await SalesServices();
    if (res.status === 200) {
      console.log("saleeee", res.data);
      dispatch(SalesActions.setSales(res?.data));
      dispatch(SalesActions.setIsFetching(false));
    }
    dispatch(SalesActions.setIsFetching(false));
  } catch (error) {
    console.log(error);
  }
};
