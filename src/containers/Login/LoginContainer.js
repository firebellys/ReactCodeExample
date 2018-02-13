
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/AppActions'

class LoginContainer extends Component {
    render() {
        if (this.props.localIsLoggedin) {
            return (
                <div>
                    <h1>Login Container</h1>
                    <span>Click log out to sign out</span>
                </div>
            );
        } else {
            return (
                <div>
                    <h1>Login Container</h1>
                    <button onClick={this.props.userLoginClick}>Login</button>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        localIsLoggedin: state.userIsLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLoginClick: () => dispatch(userLogin('test', '1234'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
