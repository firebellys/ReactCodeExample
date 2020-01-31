import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions";

const Logout = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.username);

  return (
    <div>
      Hello {username}.
      <br />
      <button onClick={() => dispatch(userLogout())}>Logout</button>
    </div>
  );
};

export default Logout;
