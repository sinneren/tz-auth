import React, { Component } from 'react';
import * as AuthActions from '../../actions/AuthActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Admin extends Component {
    componentDidMount() {
        if (!this.props.state.auth.status) {
            browserHistory.push('/login')
        }
    }
    render() {
        return (
            <div className='container-fluid'>
                <h1>Админка</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)
