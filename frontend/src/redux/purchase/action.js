import { PurchaseServices } from "./service";
import { PurchaseActions } from "./index";

export const getPurchaseAction = () => async (dispatch) => {
  try {
    dispatch(PurchaseActions.setIsFetching(true));
    const res = await PurchaseServices();
    if (res.status === 200) {
      dispatch(PurchaseActions.setPurchase(res?.data));
      dispatch(PurchaseActions.setIsFetching(false));
    }
    dispatch(PurchaseActions.setIsFetching(false));
  } catch (error) {
    console.log(error);
  }
};
