import { userLogin, userLogout } from "../actions";
import * as types from "../actions/types";

describe("Action tests", () => {
  it("should create an action to login a user", () => {
    const username = "test";
    const password = "1234";
    const expectedAction = {
      type: types.USER_LOGIN,
      payload: {
        username,
        password
      }
    };
    expect(userLogin({ username, password })).toEqual(expectedAction);
  });
  it("should create an action to logout a user", () => {
    const expectedAction = {
      type: types.USER_LOGOUT
    };
    expect(userLogout()).toEqual(expectedAction);
  });
});
