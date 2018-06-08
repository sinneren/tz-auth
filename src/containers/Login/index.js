import React, { Component } from 'react';
import Auth from '../../containers/Auth';
import * as AuthActions from '../../actions/AuthActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    handleRootSubmit(data) {
        this.props.actions.login({
            email: data.email,
            password: data.password
        });
    }
    render() {
        return (
            <div className='container-fluid'>
                <Auth
                    handlePropsSubmit={this.handleRootSubmit.bind(this)}
                    status={this.props.status}
                    errorMsg={this.props.errorMsg}
                    request={this.props.request}
                />
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
export default connect(mapStateToProps, mapDispatchToProps)(Login)
