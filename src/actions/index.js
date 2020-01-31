import { createAction } from "redux-starter-kit";

// System initiates login
export const userLogin = createAction("USER_LOGIN");

// System initiates logout
export const userLogout = createAction("USER_LOGOUT");
