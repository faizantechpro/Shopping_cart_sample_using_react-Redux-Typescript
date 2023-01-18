import { combineReducers } from "redux";
import { searchList } from "./orders";

const rootReducer = combineReducers({
  orders: searchList,
});

export default rootReducer;
