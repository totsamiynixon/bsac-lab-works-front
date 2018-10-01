import { SUCCESS_MESSAGE, ERROR_MESSAGE, CLEAR } from '../constants/action-types';

export default function alertReducer (state = {}, action) {
    switch (action.type) {
        case SUCCESS_MESSAGE:
            return {
                type: action.type,
                message: action.message
            };
        case ERROR_MESSAGE:
            return {
                type: action.type,
                message: action.message
            };
        case CLEAR:
            return {};
        default:
            return state
    };
};