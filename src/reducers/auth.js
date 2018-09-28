import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/Auth';

const initialState = {
    id: null,
    user: null,
    status: false,
    errorMsg: "",
    request: false
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                request: true,
                errorMsg: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.response_data.id,
                status: true,
                user: action.response_data.username,
                request: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                errorMsg: action.error_message,
                request: false
            }
        case LOGOUT_SUCCESS:
            return {
                ...initialState
            }
        default:
            return state
    }
}