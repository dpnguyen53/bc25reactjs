import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import shoppingReducer from "./shopping/shoppingReducer";
import { formReducer } from "./formReducer/formReducer";

const rootReducer = combineReducers({
  //key: value
  userReducer, //userReducer: userReducer,
  shoppingReducer,
  formReducer: formReducer
});

export default rootReducer;
