import {
    USER_REQUEST,
    USER_FAIL,
    USER_SUCCESS
} from '../constants/User';
import { URL } from '../constants/Default';

import axios from 'axios';

export function get_user_info (id) {
    return dispatch => {
        dispatch({
            type: USER_REQUEST,
            error_message: ''
        });
        axios
            .get(URL + 'users/' + id)
            .then(response => {
                if (response.status === 200) {
                    dispatch({
                        type: USER_SUCCESS,
                        response_data: response.data
                    });
                } else {
                    dispatch({
                        type: USER_FAIL,
                        error_message: 'Server response state: ' + response.status
                    });
                }
            })
            .catch(response => {
                dispatch({
                    type: USER_FAIL,
                    error_message: 'Server is unavailable'
                });
            });
    }

}