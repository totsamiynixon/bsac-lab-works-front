import { FETCH_GROUPS, REQUEST_GROUPS_SUCCESS, REQUEST_GROUPS_FAILURE } from "../constants/action-types";

export default function groupsReducer (state = { group: [] }, action) {
    switch (action.type) {
        case FETCH_GROUPS:
            return {
                group: [],
                error: false,
            };
        case REQUEST_GROUPS_SUCCESS:
            return {
                group: action.payload.data,
                error: false
            };
        case REQUEST_GROUPS_FAILURE:
            return {
                subj: [],
                error: true
            };
        default:
            return state;
    }
}