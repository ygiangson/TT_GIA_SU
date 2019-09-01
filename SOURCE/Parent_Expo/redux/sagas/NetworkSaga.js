import { put, takeEvery, call } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native';
import {
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAIL,
    REQUEST_LOGIN,

} from '../actions/type';

import * as API from '../../constants/Api'

export function* requestLogin(payload) {
    try {
        const response = yield call(API.requestLogin, payload)
        yield put({ type: REQUEST_LOGIN_SUCCESS, payload: response.result })
    } catch (err) {
        yield put({ type: REQUEST_LOGIN_FAIL, payload: err })
    }
}

export const watchLogin = takeEvery(REQUEST_LOGIN, requestLogin);