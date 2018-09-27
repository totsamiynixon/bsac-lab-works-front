import { FETCH_NAMES, REQUEST_NAMES_SUCCESS, REQUEST_NAMES_FAILURE } from "../constants/action-types";

export default function namesReducer(state = { name: [] }, action) {
    switch (action.type) {
        case FETCH_NAMES:
            return {
                name: [],
                error: false
            };
        case REQUEST_NAMES_SUCCESS:
            return {
                name: action.payload.data,
                error: false
            };
        case REQUEST_NAMES_FAILURE:
            return {
                name: [],
                error: true
            };
        default:
            return state;
    }
}