import { SUBMIT_REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/action-types';

export default function registerReducer (state = {}, action) {
    switch (action.type) {
        case SUBMIT_REGISTER:
            return { loggingIn: true };
        case REGISTER_SUCCESS:
            return {};
        case REGISTER_FAILURE:
            return {};
        default:
            return state
    };
};