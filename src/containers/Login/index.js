import React, { Component } from 'react';
import Auth from '../../containers/Auth';
import * as AuthActions from '../../actions/AuthActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Auth />
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)
