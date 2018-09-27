import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants/action-types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true,
                loginParams: action.user
            };
        case LOGIN_SUCCESS:
            return {
                loggedIn: true,
                username: action.payload.FullName,
                usergroup: action.payload.Group
            };
        case LOGIN_FAILURE:
            return {
                loggedIn: false
            };
        case LOGOUT:
            return {};
        default:
            return state
    };
};