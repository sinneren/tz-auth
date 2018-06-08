import React, { Component } from 'react';
export default class News extends Component {
    render() {
        return (
            <div className="col-4 mb-3">
                <h3>{this.props.name}</h3>
                <small className="d-block text-muted">{this.props.date}</small>
                <article>{this.props.text}</article>
            </div>
        )
    }
}