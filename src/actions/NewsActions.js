import {
    NEWS_REQUEST,
    NEWS_FAIL,
    NEWS_SUCCESS
} from '../constants/News';

import axios from 'axios';

const URL = 'http://5ace0d5c23cb4e00148b83dd.mockapi.io/';

export function load_news () {
    return dispatch => {
        dispatch({
            type: NEWS_REQUEST,
            error_message: ''
        });
        axios
            .get(URL + 'news/')
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: NEWS_SUCCESS,
                        response_data: response.data
                    });
                } else {
                    dispatch({
                        type: NEWS_FAIL,
                        error_message: 'Server response state: ' + response.status
                    });
                }
            })
            .catch(response => {
                dispatch({
                    type: NEWS_FAIL,
                    error_message: 'Server is unavailable'
                });
            });
    }

}