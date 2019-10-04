import reducer from "../store/Reducer";
import * as types from "../constants/ActionTypes";

describe("Reducer tests", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      userIsLoggedIn: false,
      username: "",
      password: "",
      error: null
    });
  });

  it("should handle USER_LOGIN", () => {
    expect(
      reducer(
        {},
        {
          type: types.USER_LOGIN,
          username: "test",
          password: "1234"
        }
      )
    ).toEqual({
      error: null,
      password: "1234",
      userIsLoggedIn: true,
      username: "test"
    });
  });
  it("should handle USER_LOGOUT", () => {
    expect(
      reducer(
        {},
        {
          type: types.USER_LOGOUT
        }
      )
    ).toEqual({
      error: null,
      password: "",
      userIsLoggedIn: false,
      username: ""
    });
  });
});
