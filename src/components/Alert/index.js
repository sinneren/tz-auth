import React, { Component } from 'react';


export default class Alert extends Component {
    render() {
        return (
            <div className={"alert alert-" + this.props.alertType}>
                {this.props.alertContent}
            </div>
        )
    }
}