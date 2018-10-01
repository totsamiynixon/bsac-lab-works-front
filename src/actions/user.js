import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    SUBMIT_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FETCH_GROUPS,
    REQUEST_GROUPS_SUCCESS,
    REQUEST_GROUPS_FAILURE,
    FETCH_NAMES,
    REQUEST_NAMES_SUCCESS,
    REQUEST_NAMES_FAILURE,
    SUCCESS_MESSAGE,
    ERROR_MESSAGE,
    CLEAR
} from '../constants/action-types';

export const loginRequest = (username, password) => {
    return {
        type: LOGIN_REQUEST,
        user: { username, password }
    }
};

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
};

export const loginFailure = () => {
    return { type: LOGIN_FAILURE }
};

export const logout = () => {
    return { type: LOGOUT }
};

export const submitRegister = (group, fullname, userlogin, password, confirmPassword) => {
    return {
        type: SUBMIT_REGISTER,
        group,
        fullname,
        userlogin,
        password,
        confirmPassword
    }
};

export const registerSuccess = (user) => {
    return {
        type: REGISTER_SUCCESS,
        payload: user
    }
};

export const registerFailure = () => {
    return { type: REGISTER_FAILURE }
};

export const fetchGroups = () => {
    return { type: FETCH_GROUPS }
};

export const requestGroupsSuccess = (groups) => {
    return {
        type: REQUEST_GROUPS_SUCCESS,
        payload: groups
    }
};

export const requestGroupsFailure = () => {
    return { type: REQUEST_GROUPS_FAILURE }
};

export const fetchNames = (groupId) => {
    return {
        type: FETCH_NAMES,
        payload: groupId
    }
};

export const requestNamesSuccess = (names) => {
    return {
        type: REQUEST_NAMES_SUCCESS,
        payload: names
    }
};

export const requestNamesFailure = () => {
    return { type: REQUEST_NAMES_FAILURE }
};

export const successMessage = (message) => {
    return {
        type: SUCCESS_MESSAGE,
        message
    }
};

export const errorMessage = (message) => {
    return {
        type: ERROR_MESSAGE,
        message
    }
};

export const clear = () => {
    return { type: CLEAR }
};