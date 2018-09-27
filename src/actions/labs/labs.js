import { FETCH_LABS, REQUEST_LABS_SUCCESS, REQUEST_LABS_ERROR } from "../../constants/action-types";

export const fetchLabs = (subjectId) => {
    return {
        type: FETCH_LABS,
        payload: subjectId
    }
};

export const requestLabsSuccess = (labs) => {
    return {
        type: REQUEST_LABS_SUCCESS,
        payload: labs.data
    }
};

export const requestLabsError = () => {
    return { type: REQUEST_LABS_ERROR }
};
