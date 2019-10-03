import * as types from "../constants/ActionTypes";

// System initiates login
export const userLogin = (username, password) => ({
  type: types.USER_LOGIN,
  username,
  password
});

// System initiates logout
export const userLogout = () => ({ type: types.USER_LOGOUT });

// System initiates change chart
export const changeChart = () => ({ type: types.CHANGE_CHART });
