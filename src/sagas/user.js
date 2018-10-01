import { takeLatest, call, put } from "redux-saga/effects";
import { LOGIN_REQUEST, SUBMIT_REGISTER } from "../constants/action-types";
import { loginSuccess, loginFailure, registerSuccess, registerFailure, successMessage, errorMessage } from "../actions/user";
import axios from "axios";

export function* watchLogin () {
    yield takeLatest(LOGIN_REQUEST, loginRequest);
}

export function* loginRequest (loginRequest) {
    try {
        if (!loginRequest.user.username || !loginRequest.user.password) {
            yield put(errorMessage(`Заполните поля`));
            console.log('Fill in the fields');
        } else {
            let users = JSON.parse(localStorage.getItem('users'));
            let authorisedUser = users.filter(user => { if (user.Login === loginRequest.user.username &&
                                                            user.password === loginRequest.user.password) return user;});
            console.log(authorisedUser);
            if (authorisedUser.length !== 0) {
                yield put(loginSuccess(authorisedUser[0]));
            } else {
                yield put(errorMessage(`Не верный логин или пароль`));
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
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let newUser = {
            Group: submitRegister.group,
            FullName: submitRegister.fullname,
            Login: submitRegister.userlogin,
            password: submitRegister.password
        };
        let duplicateUser = users.filter(user => {
            return user.Login === newUser.Login;
        }).length;
        if (duplicateUser) {
            yield put(errorMessage(`Такой пользователь уже существует!`));
            console.log("The user has already created");
        } else {
            const response = yield call(axios, `http://localhost:1080/users/register?Group=${submitRegister.group}
                                                                            &FullName=${submitRegister.fullname}`);
            users.push(newUser);
            console.log(users);
            localStorage.setItem('users', JSON.stringify(users));
            yield put(registerSuccess(response));
            yield put(successMessage(`Регистрация прошла успешно`));
        }
    } catch (e) {
        yield put(registerFailure());
        yield put(errorMessage(`Ошибка регистрации`));
    }
}