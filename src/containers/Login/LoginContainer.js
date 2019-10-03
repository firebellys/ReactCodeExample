import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../actions/AppActions";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const userIsLoggedIn = useSelector(state => state.userIsLoggedIn);

  return (
    <div>
      <h1>Login Container</h1>
      {userIsLoggedIn ? (
        <span>Click log out to sign out</span>
      ) : (
        <button onClick={() => dispatch(userLogin("test", "1234"))}>
          Login
        </button>
      )}
    </div>
  );
};

export default LoginContainer;
