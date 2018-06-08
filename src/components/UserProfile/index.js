import React, { Component } from 'react';
import './style.css';

export default class UserProfile extends Component {
    render() {
        const datetime = new Date(this.props.data.createdAt);
        const datetimeformatted = datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
        return (
            <div className="card rounded">
                {this.props.data.avatar.length > 0 ? <img src={this.props.data.avatar} alt={this.props.data.id} className="card-img-top" /> : ''}
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.username}&nbsp;<small>[{datetimeformatted}]</small></h5>
                    <p className="card-text text-muted">{this.props.data.address}</p>
                    <p className="card-text text-muted">{this.props.data.phone}</p>
                </div>
            </div>
        )
    }
}
