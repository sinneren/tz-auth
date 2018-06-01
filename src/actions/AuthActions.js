import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/Auth';
import axios from 'axios';

const URL = 'http://5ace0d5c23cb4e00148b83dd.mockapi.io/';

export function login(payload) {
    // TODO
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
            error_message: ''
        });
        axios
            .get(URL + 'users/1')
            .then(response => {
                if (response.status === 200) {
                    if (response.data.username === payload.email && response.data.password === payload.password) {
                        dispatch({
                            type: LOGIN_SUCCESS,
                            response_data: response.data
                        });
                    } else {
                        dispatch({
                            type: LOGIN_FAIL,
                            error_message: 'Email or password is incorrect'
                        });
                    }
                } else {
                    dispatch({
                        type: LOGIN_FAIL,
                        error_message: 'Server response state: ' + response.status
                    });
                }
            })
            .catch(response => {
                dispatch({
                    type: LOGIN_FAIL,
                    error_message: 'Server is unavailable'
                });
            });
    }
}

export function logout() {
    return {
        type: LOGOUT_SUCCESS
    }
}