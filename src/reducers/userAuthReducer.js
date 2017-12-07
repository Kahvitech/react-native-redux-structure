import {
    LOGIN_RESET,
    LOGIN_AUTH,
    LOGIN_AUTH_SUCCESS,
    LOGIN_AUTH_FAILURE,
    LOGIN_PASS_INVALID
} from '../actions/constants'

const initialState = {
  data: [],
  userAuthenticated: false,
  startingAuth: false,
  authError: false,
  passwordInvalid: false,
  blankInput: false
}

export default function userAuthReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_RESET:
            return {
                ...state,
                data: [],
                userAuthenticated: false,
                startingAuth: false,
                authError: false,
                passwordInvalid: false,
                blankInput: false
            }
        case LOGIN_AUTH:
            return {
                ...state,
                data: [],
                userAuthenticated: false,
                startingAuth: true,
                authError: false,
                passwordInvalid: false,
                blankInput: false
            }
        case LOGIN_AUTH_SUCCESS:
            return {
                ...state,
                data: action.data,
                userAuthenticated: true,
                startingAuth: false,
                authError: false,
                passwordInvalid: false,
                blankInput: false
            }
        case LOGIN_AUTH_FAILURE:
            return {
                ...state,
                data: [],
                userAuthenticated: false,
                startingAuth: false,
                authError: true,
                passwordInvalid: false,
                blankInput: false
            }
        case LOGIN_PASS_INVALID:
            return {
                ...state,
                data: [],
                userAuthenticated: false,
                startingAuth: false,
                authError: true,
                passwordInvalid: true,
                blankInput: false
            }
        default:
            return state
    }
}
