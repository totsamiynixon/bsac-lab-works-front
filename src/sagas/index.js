import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { FETCH_SUBJECTS, FETCH_LABS, FETCH_MATERIALS, FETCH_GROUPS, FETCH_NAMES } from "../constants/action-types";
import { requestSubjectsSuccess, requestSubjectsError } from "../actions/subjects/subjects";
import { requestLabsSuccess, requestLabsError } from "../actions/labs/labs";
import { requestMaterialsSuccess, requestMaterialsError } from "../actions/materials/materials";
import { requestGroupsSuccess, requestGroupsFailure, requestNamesSuccess, requestNamesFailure } from "../actions/user";

export function* watchFetchSubjects () {
    yield takeEvery(FETCH_SUBJECTS, fetchSubjects)
}

function* fetchSubjects () {
    try {
        const dataSubj = yield call(axios, 'http://localhost:1080/api/subjects');
        yield put(requestSubjectsSuccess(dataSubj));
    }
    catch (e) {
        yield put(requestSubjectsError());
    }
}

export function* watchFetchLabs () {
    yield takeLatest(FETCH_LABS, fetchLabs);
}

function* fetchLabs (fetchLabs) {
    try {
        const dataLab = yield call(axios, `http://localhost:1080/api/labs?subjectId=${fetchLabs.payload}`);
        console.log(dataLab);
        yield put(requestLabsSuccess(dataLab));
    } catch (e) {
        yield put(requestLabsError());
    }
}

export function* watchFetchMaterials () {
    yield takeLatest(FETCH_MATERIALS, fetchMaterials);
}

function* fetchMaterials (fetchMaterials) {
    try {
        const dataLab = yield call(axios, `http://localhost:1080/api/materials?labId=${fetchMaterials.payload}`);
        yield put(requestMaterialsSuccess(dataLab));
    } catch (e) {
        yield put(requestMaterialsError());
    }
}

export function* watchFetchGroups () {
    yield takeEvery(FETCH_GROUPS, fetchGroups);
}

function* fetchGroups () {
    try {
        const dataGroups = yield call(axios, `http://localhost:1080/api/groups`);
        yield put(requestGroupsSuccess(dataGroups));
    } catch(e) {
        yield put(requestGroupsFailure());
    }
}

export function* watchFetchNames () {
    yield takeLatest(FETCH_NAMES, fetchNames);
}

function* fetchNames (fetchNames) {
    try {
        const dataNames = yield call(axios, `http://localhost:1080/api/names?groupId=${fetchNames.payload}`);
        yield put(requestNamesSuccess(dataNames));
    } catch(e) {
        yield put(requestNamesFailure());
    }
}
