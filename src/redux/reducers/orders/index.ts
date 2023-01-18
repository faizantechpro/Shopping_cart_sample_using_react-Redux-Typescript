import * as actions from "../../constants";

const FILTERED_ORDER_LIST_INIT_STATE = {
  data: [],
  loading: true,
};
export const searchList = (
  state = FILTERED_ORDER_LIST_INIT_STATE,
  action: any
) => {
  switch (action.type) {
    case actions.GET_ORDER_LIST_REQUEST:
      return { loading: true, data: state.data };
    case actions.GET_ORDER_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    default:
      return state;
  }
};
