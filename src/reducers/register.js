import { SUBMIT_REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/action-types';

export default function registerReducer (state = {}, action) {
    switch (action.type) {
        case SUBMIT_REGISTER:
            return { registering: true };
        case REGISTER_SUCCESS:
            return { registered: true };
        case REGISTER_FAILURE:
            return {};
        default:
            return state
    };
};