import * as types from "../constants/ActionTypes";
import produce from "immer";

const initialState = {
  userIsLoggedIn: false,
  username: "",
  password: "",
  error: null
};

// Reducer
export default produce((draft, action) => {
  switch (action.type) {
    case types.USER_LOGIN:
      const { username, password } = action;
      if (username === "test" && password === "1234") {
        draft.username = username;
        draft.password = password;
        draft.userIsLoggedIn = true;
        draft.error = null;
      } else {
        draft.error = "Login Incorrect";
        draft.userIsLoggedIn = false;
      }
      break;
    case types.USER_LOGOUT:
      return initialState;
    default:
      return draft;
  }
}, initialState);
