import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/Auth';
import axios from 'axios';
import { URL } from '../constants/Default';

export function login(payload) {
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
        type: LOGOUT_SUCCESS,
    }
}