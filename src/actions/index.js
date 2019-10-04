import { createAction } from "redux-starter-kit";
import { USER_LOGIN, USER_LOGOUT } from "./types";

// System initiates login
export const userLogin = createAction(USER_LOGIN);

// System initiates logout
export const userLogout = createAction(USER_LOGOUT);
