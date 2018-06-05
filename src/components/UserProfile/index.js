import React, { Component } from 'react';
export default class UserProfile extends Component {
    render() {
        return (
            <div>
                {this.props.data.avatar.length > 0 ? <img src={this.props.data.avatar} alt="" className="rounded" width="64" height="64" /> : ''}
                <h2>{this.props.data.id + ' ' + this.props.data.username}&nbsp;<small>[{this.props.data.createdAt}]</small></h2>
            </div>
        )
    }
}
