import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActions from '../../actions/NewsActions';
import Spinner from '../../components/Spinner';

class News extends Component {
    componentDidMount() {
        this.props.actions.load_news();

    }
    render() {
        let news_list = null;

        if (this.props.data) {
            news_list = this.props.data.map((item, index) => {
                const datetime = new Date(item.createdAt);
                return (
                    <div key={item.id} className="col-4 mb-3">
                        <h3>{item.name}</h3>
                        <small className="d-block text-muted">{datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear()}</small>
                        <article>{item.text}</article>
                    </div>
                );
            });
        }

        return (
            <div className='container-fluid'>
                <h1>News</h1>
                {this.props.request ? <Spinner /> : ''}
                {news_list ? <div className="row">{news_list}</div> : ''}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state.news;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(newsActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(News)