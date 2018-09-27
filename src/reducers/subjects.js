import { FETCH_SUBJECTS, REQUEST_SUBJECT_SUCCESS, REQUEST_SUBJECT_ERROR } from "../constants/action-types";

export default function subjectReducer (state = { subj: [] }, action) {
    switch (action.type) {
        case FETCH_SUBJECTS:
            return {
                subj: [],
                error: false,
            };
        case REQUEST_SUBJECT_SUCCESS:
            return {
                subj: action.payload,
                error: false
            };
        case REQUEST_SUBJECT_ERROR:
            return {
                subj: [],
                error: true
            };
        default:
            return state;
    }
}