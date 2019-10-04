import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../actions";

const Login = () => {
  const dispatch = useDispatch();
  const userIsLoggedIn = useSelector(state => state.userIsLoggedIn);

  return (
    <div>
      {userIsLoggedIn ? (
        <span>Click log out to sign out</span>
      ) : (
        <button
          onClick={() =>
            dispatch(userLogin({ username: "test", password: "1234" }))
          }
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
