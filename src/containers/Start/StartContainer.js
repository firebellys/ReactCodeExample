import React, { Component } from "react";
import { connect } from "react-redux";

class StartContainer extends Component {
  render() {
    return (
      <div>
        <h1>Starting Page</h1>
        <div>
          <span>
            This application is an example project that makes use of various
            technologies. Click on the charts link in the header to get access
            to the charts page or to login.
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps)(StartContainer);
