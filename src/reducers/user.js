import {
    USER_REQUEST,
    USER_FAIL,
    USER_SUCCESS,
} from '../constants/User';

const initialState = {
    data: null,
    errorMsg: "",
    request: false
};

export default function userdatastate(state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                request: true,
                errorMsg: '',
            }
        case USER_SUCCESS:
            return {
                ...state,
                data: action.response_data,
                request: false
            }
        case USER_FAIL:
            return {
                ...state,
                errorMsg: action.error_message,
                request: false
            }
        default:
            return state
    }
}