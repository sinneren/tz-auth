import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as newsActions from '../../actions/NewsActions';
import Spinner from '../../components/Spinner';
import NewsItem from '../../components/NewsItem';
import PropTypes from 'prop-types';

class News extends Component {
    static propTypes = {
        data: PropTypes.array,
        request: PropTypes.bool,
        auth: PropTypes.object,
        news: PropTypes.object,
        user: PropTypes.object
    }

    componentDidMount() {
        this.props.actions.load_news();
    }
    render() {
        let news_list = null;

        if (this.props.data) {
            news_list = this.props.data.map((item, index) => {
                const datetime = new Date(item.createdAt);
                const datetimeformatted = datetime.getDate() + '/' + datetime.getMonth() + '/' + datetime.getFullYear();
                return (
                    <NewsItem key={item.id} name={item.name} date={datetimeformatted} text={item.text} />
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