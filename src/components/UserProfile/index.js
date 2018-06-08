import React, { Component } from 'react';
export default class UserProfile extends Component {
    render() {
        const datetime = new Date(this.props.data.createdAt);
        const datetimeformatted = datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
        return (
            <div>
                {this.props.data.avatar.length > 0 ? <img src={this.props.data.avatar} alt="" className="rounded" width="64" height="64" /> : ''}
                <h2>{this.props.data.id + ' ' + this.props.data.username}&nbsp;<small>[{datetimeformatted}]</small></h2>
                <p className="text-muted">{this.props.data.address}</p>
                <p className="text-muted">{this.props.data.phone}</p>
            </div>
        )
    }
}
