import { productActions } from "./index";
import { productService } from "./services";

export const getProductAction = () => async (dispatch) => {
  dispatch(productActions.setIsFetching(true));
  try {
    const res = await productService();
    if (res?.status === 200) {
      dispatch(productActions.setIsFetching(false));
      dispatch(productActions.setProducts(res?.data));
    }
    dispatch(productActions.setIsFetching(false));
  } catch (error) {
    console.log("eroor" + error);
  }
};
