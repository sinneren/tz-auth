import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActions from '../../actions/NewsActions';

class News extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <h1>News</h1>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(newsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)