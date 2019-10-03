import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../actions/AppActions";

const LogoutContainer = () => {
  const dispatch = useDispatch();
  const userIsLoggedIn = useSelector(state => state.userIsLoggedIn);
  const username = useSelector(state => state.username);

  return (
    userIsLoggedIn && (
      <div>
        Hello {username}.
        <br />
        <button onClick={() => dispatch(userLogout())}>Logout</button>
      </div>
    )
  );
};

export default LogoutContainer;
