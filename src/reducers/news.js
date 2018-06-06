import {
    NEWS_REQUEST,
    NEWS_FAIL,
    NEWS_SUCCESS,
} from '../constants/News';

const initialState = {
    data: null,
    errorMsg: "",
    request: false
};

export default function newslist(state = initialState, action) {
    switch (action.type) {
        case NEWS_REQUEST:
            return {
                ...state,
                request: true,
                errorMsg: '',
            }
            break;
        case NEWS_SUCCESS:
            return {
                ...state,
                data: action.response_data,
                request: false
            }
            break;
        case NEWS_FAIL:
            return {
                ...state,
                errorMsg: action.error_message,
                request: false
            }
            break;
        default:
            return state
            break;
    }
}