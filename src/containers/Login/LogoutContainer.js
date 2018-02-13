
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../actions/AppActions'

class LogoutContainer extends Component {
    render() {
        if (this.props.localIsLoggedin) {
            return (
                <div><button onClick={this.props.userLogoutClick}>Logout</button></div>
            );
        } else {
            return (
                <div></div>
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
        userLogoutClick: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);