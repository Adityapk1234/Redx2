import { cartActions } from "./cart";
import { cartSliceActions } from "./cart-slice";

export const sendCartData = (cartfire) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-ccb1c-default-rtdb.asia-southeast1.firebasedatabase.app/reduxorder.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartfire.items,
            totalquantity: cartfire.totalquantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-ccb1c-default-rtdb.asia-southeast1.firebasedatabase.app/reduxorder.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartSliceActions.replaceCart({
          items: cartData.items || [],
          totalquantity: cartData.totalquantity,
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};
