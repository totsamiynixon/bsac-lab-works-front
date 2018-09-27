import { takeLatest, call, put } from "redux-saga/effects";
import { LOGIN_REQUEST, SUBMIT_REGISTER } from "../constants/action-types";
import { loginSuccess, loginFailure, registerSuccess, registerFailure } from "../actions/user";
import axios from "axios";

export function* watchLogin () {
    yield takeLatest(LOGIN_REQUEST, loginRequest);
}

export function* loginRequest (loginRequest) {
    try {
        if (!loginRequest.user.username || !loginRequest.user.password) {
            console.log('Fill in the fields');
        } else {
            let users = JSON.parse(localStorage.getItem('users'));
            let authorisedUser = users.filter(user => { if (user.Login === loginRequest.user.username &&
                                                            user.password === loginRequest.user.password) return user;});
            if (authorisedUser.length !== 0) {
                yield put(loginSuccess(authorisedUser[0]));
            } else {
                console.log("incorrect login or password");
            }
        }
    } catch (e) {
        yield put(loginFailure());
    }
}

export function* watchRegister () {
    yield takeLatest(SUBMIT_REGISTER, submitRegister);
}

export function* submitRegister (submitRegister) {
    try {
        // const newUserData = {
        //     Group: submitRegister.group,
        //     FullName: submitRegister.fullname,
        //     Login: submitRegister.userlogin,
        //     password: submitRegister.password
        // };
        const response = yield call(axios, `http://localhost:1080/users/register?Group=${submitRegister.group}
                                                                                &FullName=${submitRegister.fullname}`);
        console.log(response);
        yield put(registerSuccess(response));
    } catch (e) {
        yield put(registerFailure());
    }
}

// function handleResponse(response) {
//     return response
//         .text()
//         .then(text => {
//             const data = text && JSON.parse(text);
//             if (!response.ok) {
//                 const error = (data && data.message) || response.statusText;
//                 return Promise.reject(error);
//             }
//             return data;
//         });
// }

// function fetchUser () {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         // body: JSON.stringify({ username, password })
//     };
//
//     return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // login successful if there's a jwt token in the response
//             if (user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('user', JSON.stringify(user));
//             }
//
//             return user;
//         });
// }