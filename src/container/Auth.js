import React, { Component } from 'react';
import {
    Route, Redirect,
} from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Auth extends Component {
    static PropTypes = {
        user: PropTypes.string
    }

    componentWillMount() {
        this.userWillTransfer(this.props);
    }

    componentwillUpdate(nextProps) {
        this.userWillTransfer(this.props);
    }

    userWillTransfer(props) {
        if (!localStorage.getItem('sessionId')) {
            this.setState({ isAuthenticated: true});
        }
    }
    render() {
        return (
            this.ListeningStateChangedEvent.isAuthenticated? (
                <Route children={this.props.children} />
            ) : (
                <Redirect to={'/login'} />
            )
        );
    }
}

// const mapStateToProps =state => ({
//    sessionId: state.sessionId
// });

export default withRouter(Auth);