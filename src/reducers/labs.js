import { FETCH_LABS, REQUEST_LABS_SUCCESS, REQUEST_LABS_ERROR } from "../constants/action-types";

export default function labsReducer (state = { lab: [] }, action) {
    switch (action.type) {
        case FETCH_LABS:
            return {
                lab: [],
                error: false
            };
        case REQUEST_LABS_SUCCESS:
            return {
                lab: action.payload,
                error: false
            };
        case REQUEST_LABS_ERROR:
            return {
                subj: [],
                error: true
            };
        default:
            return state;
    }
}