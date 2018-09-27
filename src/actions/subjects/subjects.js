import { REQUEST_SUBJECT_SUCCESS, REQUEST_SUBJECT_ERROR, FETCH_SUBJECTS } from "../../constants/action-types";

export const fetchSubjects = () => {
    return { type: FETCH_SUBJECTS }
};

export const requestSubjectsSuccess = (subjects) => {
    return {
        type: REQUEST_SUBJECT_SUCCESS,
        payload: subjects.data
    }
};

export const requestSubjectsError = () => {
    return { type: REQUEST_SUBJECT_ERROR }
};

