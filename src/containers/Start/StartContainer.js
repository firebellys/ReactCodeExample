
import React, { Component } from 'react';
import { connect } from 'react-redux';

class StartContainer extends Component {
    render() {

        return (
            <div><h1>Welcome Page</h1></div>
        );
    }
}
const mapStateToProps = state => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(StartContainer);