
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogout } from '../../actions/AppActions'

class LogoutContainer extends Component {
    render() {
        if (this.props.localUserIsLoggedIn) {
            return (
                <div>Hello {this.props.localUsername}. <button onClick={this.props.userLogoutClick}>Logout</button></div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}

// Validate prop types
LogoutContainer.propTypes = {
    localUserIsLoggedIn: PropTypes.bool,
    localUsername: PropTypes.string,
    userLogoutClick: PropTypes.func
};

const mapStateToProps = state => {
    return {
        localUserIsLoggedIn: state.userIsLoggedIn,
        localUsername: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogoutClick: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutContainer);