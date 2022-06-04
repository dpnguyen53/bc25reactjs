import { combineReducers } from "redux";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  //key: value
  userReducer, //userReducer: userReducer,
});

export default rootReducer;
