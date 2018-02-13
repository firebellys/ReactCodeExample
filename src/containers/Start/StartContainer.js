
import React, { Component } from 'react';
import { connect } from 'react-redux';

class StartContainer extends Component {
    render() {
        return (
            <div>
                <h1>Welcome Page</h1>
                <div>
                    <span>This application is an example project that makes use of following technolgies.</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}

export default connect(mapStateToProps)(StartContainer);