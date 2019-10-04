import { userLogin, userLogout } from "../actions";
import { createReducer } from "redux-starter-kit";

const initialState = {
  userIsLoggedIn: false,
  username: "",
  password: "",
  error: null
};

// Reducer
const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => {
    const { username, password } = action.payload;
    if (username === "test" && password === "1234") {
      return {
        username,
        password,
        userIsLoggedIn: true,
        error: null
      };
    } else {
      state.error = "Login Incorrect";
      state.userIsLoggedIn = false;
    }
  },
  [userLogout]: () => initialState
});

export default userReducer;
