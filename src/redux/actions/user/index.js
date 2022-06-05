// import {
//   DELETE_USER,
//   EDIT_USER,
//   SAVE_USER,
//   GET_KEYWORD,
// } from "./../../constants/user";
import * as ActionType from "./../../constants/user";

const actDeletUser = (user) => {
  return {
    type: ActionType.DELETE_USER,
    payload: user,
  };
};

const actEditUser = (user) => {
  return {
    type: ActionType.EDIT_USER,
    payload: user,
  };
};

const actSaveUser = (user) => {
  return {
    type: ActionType.SAVE_USER,
    payload: user,
  };
};

const getKeyword = (keyword) => {
  return {
    type: ActionType.GET_KEYWORD,
    payload: keyword,
  };
};

export { actDeletUser, actEditUser, actSaveUser, getKeyword };
