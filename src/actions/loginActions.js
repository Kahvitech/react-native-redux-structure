import {
    LOGIN_RESET,
    LOGIN_AUTH,
    LOGIN_AUTH_SUCCESS,
    LOGIN_AUTH_FAILURE,
    LOGIN_PASS_INVALID
} from './constants'

import {
    startInterceptor,
    loginAuthenticate
} from '../request/endPoints'

import loginCheck from '../services/api'

export function resetActions() {
    return {
        type: LOGIN_RESET
    }
}

export function loginAuth() {
    return {
        type: LOGIN_AUTH
    }
}

export function loginAuthSuccess(data) {
    return {
        type: LOGIN_AUTH_SUCCESS,
        data
    }
}

export function loginAuthFailure () {
    return {
        type: LOGIN_AUTH_FAILURE
    }
}

export function loginPassInvalid () {
    return {
        type: LOGIN_PASS_INVALID
    }
}

export function validateLoginAuth (username, password) {
    console.log(username, password)
    return (dispatch) => {
        if(/^(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(password)) {
            dispatch(loginAuth())
            loginCheck().then((data) => {
                if(data[0].username == username && data[0].password == password) {
                    dispatch(loginAuthSuccess(data))
                } else {
                    dispatch(loginPassInvalid())
                }
            }).catch((err) => {
                dispatch(loginAuthFailure())
            })
        } else {
            dispatch(loginPassInvalid())
        }
    }
}
