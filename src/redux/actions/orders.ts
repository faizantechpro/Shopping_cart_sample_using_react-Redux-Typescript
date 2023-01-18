import * as actions from "../constants";
import { orders } from "../../asset/data/FrontendTaskMockOrdersData";

interface SearchConfigProps {
  search_text: string;
}
export const getFilteredOrders =
  (detail: SearchConfigProps) => (dispatch: any) => {
    dispatch({ type: actions.GET_ORDER_LIST_REQUEST });
    const value = detail.search_text;
    const filteredOrders =
      value !== ""
        ? orders.filter((product: any) => {
            return (
              product.orderID.toLowerCase().includes(value) ||
              product.companyName.toLowerCase().includes(value) ||
              product.customerName.toLowerCase().includes(value)
            );
          })
        : orders;
    dispatch({ type: actions.GET_ORDER_LIST_SUCCESS, payload: filteredOrders });
  };
