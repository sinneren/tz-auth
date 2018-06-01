import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthActions from '../../actions/AuthActions';
import Spinner from '../../components/Spinner';
import Alert from '../../components/Alert';

const pattern_email = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm;

export class Auth extends Component {
    constructor(props) {
        super(props);
        this.submitBtn = React.createRef();
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            },
            request: false
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.submitBtn.current.disabled = true;

        if (this.state.email.length > 0 && this.state.password.length > 0) {
            this.props.actions.login({
                email: this.state.email,
                password: this.state.password
            });
        }
    }
    handleEmailChange(e) {
        let value = e.currentTarget.value;
        let check = pattern_email.exec(value);
        if (check !== null) {
            this.setState(prevState => ({
                ...prevState,
                email: value,
                errors: {
                    ...prevState.errors,
                    email: ''
                }
            }));
            e.currentTarget.className = 'form-control-plaintext';
            this.submitBtn.current.disabled = false;
        } else {
            this.setState(prevState => ({
                ...prevState,
                email: '',
                errors: {
                    ...prevState.errors,
                    email: 'Email is not correct'
                }
            }));
            e.currentTarget.className = 'form-control';
            this.submitBtn.current.disabled = true;
        }
    }
    handlePasswordChange(e) {
        let value = e.currentTarget.value;
        if (value.length > 5) {
            this.setState(prevState => ({
                ...prevState,
                password: value,
                errors: {
                    ...prevState.errors,
                    password: ''
                }
            }));
            e.currentTarget.className = 'form-control-plaintext';
            this.submitBtn.current.disabled = false;
        } else {
            this.setState(prevState => ({
                ...prevState,
                password: '',
                errors: {
                    ...prevState.errors,
                    password: 'Password must be more than 5 characters'
                }
            }));
            e.currentTarget.className = 'form-control';
            this.submitBtn.current.disabled = true;
        }
    }
    render() {
        const email_error_message = <span className="form-text text-danger">{this.state.errors.email}</span>;
        const password_error_message = <span className="form-text text-danger">{this.state.errors.password}</span>;
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <div>
                    <h1>Login</h1>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" onChange={this.handleEmailChange.bind(this)} disabled={this.props.request ? 'disabled' : ''}/>
                    {(this.state.errors.email.length > 0) ? email_error_message : ''}
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" onChange={this.handlePasswordChange.bind(this)} disabled={this.props.request ? 'disabled' : ''}/>
                    {(this.state.errors.password.length > 0) ? password_error_message : ''}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" ref={this.submitBtn} disabled="disabled">{this.props.request ? <Spinner /> : 'Login'}</button>
                </div>
                {this.props.errorMsg ? <Alert alertType='danger' alertContent={this.props.errorMsg} /> : ''}
            </form>
        )
    }
}
function mapStateToProps (state) {
    return state.auth;
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)