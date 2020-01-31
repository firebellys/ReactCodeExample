import reducer from "../reducers";
import { userLogin, userLogout } from "../actions";

describe("reducer tests", () => {
  it("should return the initial state by default", () => {
    expect(reducer(undefined, {})).toEqual({
      userIsLoggedIn: false,
      username: "",
      password: "",
      error: null
    });
  });
  it("should handle valid user login", () => {
    expect(
      reducer(
        {},
        userLogin({
          username: "test",
          password: "1234"
        })
      )
    ).toEqual({
      error: null,
      password: "1234",
      userIsLoggedIn: true,
      username: "test"
    });
  });
  it("should handle invalid user login", () => {
    expect(
      reducer({}, userLogin({ username: "not_test", password: "4321" }))
    ).toEqual({
      error: "Login Incorrect",
      userIsLoggedIn: false
    });
  });
  it("should handle USER_LOGOUT", () => {
    expect(reducer({}, userLogout())).toEqual({
      error: null,
      password: "",
      userIsLoggedIn: false,
      username: ""
    });
  });
});
