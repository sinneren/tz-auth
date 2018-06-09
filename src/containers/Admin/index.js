import React, { Component } from 'react';
import * as AuthActions from '../../actions/AuthActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

class Admin extends Component {
    static propTypes = {
        status: PropTypes.bool
    }
    componentDidMount() {
        if (!this.props.status) {
            browserHistory.push('/login')
        }
    }
    render() {
        return (
            <div className='container-fluid'>
                <h1>Админка</h1>
                <p>Это приватная страница видна только авторизованным пользователям</p>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.auth
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)
