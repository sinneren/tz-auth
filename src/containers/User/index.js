import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../actions/UserActions';
import Spinner from '../../components/Spinner';
import Alert from '../../components/Alert';
import UserProfile from '../../components/UserProfile';
import { browserHistory } from 'react-router';

class User extends Component {
    componentDidMount() {
        if (this.props.state.auth.status && this.props.state.auth.id !== null) {
            this.props.actions.get_user_info(this.props.state.auth.id);

        } else {
            browserHistory.push('/');
        }
    }
    render() {
        let alert_container = '';
        let data = this.props.state.user.data;

        if (this.props.state.user.errorMsg.length > 0) {
            alert_container = <Alert alertType='danger' alertContent={this.props.state.user.errorMsg} />;
        }

        return (
            <div className='container-fluid'>
                <h1>Личный кабинет</h1>
                {data ? <UserProfile data={data} />: ''}
                {this.props.state.user.request ? <Spinner /> : ''}
                {alert_container}
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
        actions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)