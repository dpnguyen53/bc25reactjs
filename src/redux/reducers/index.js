import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import shoppingReducer from "./shopping/shoppingReducer";

const rootReducer = combineReducers({
  //key: value
  userReducer, //userReducer: userReducer,
  shoppingReducer,
});

export default rootReducer;
