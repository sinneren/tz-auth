import React, { Component } from 'react';
import * as AuthActions from '../../actions/AuthActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Logout extends Component {
    componentDidMount() {
        this.props.actions.logout();
    }
    componentDidUpdate() {
        if (!this.props.status) {
            browserHistory.push('/login');
        }
    }
    render() {
        return (
            <div className='container-fluid'>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.auth;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout)
