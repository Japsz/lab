import {initialState} from "./initialState";
import {
  GET_LOGIN_ACTION_RESET,
  GET_LOGOUT_ACTION_SUCCESS,
  GET_LOGOUT_ACTION_RESET,
  GET_LOGOUT_ACTION_INIT,
  GET_LOGOUT_ACTION_ERROR,
  GET_LOGIN_ACTION_SUCCESS,
  GET_LOGIN_ACTION_INIT,
  GET_LOGIN_ACTION_ERROR,
  CHECK_LOGIN_TOKEN_ACTION_RESET,
  CHECK_LOGIN_TOKEN_ACTION_SUCCESS,
  CHECK_LOGIN_TOKEN_ACTION_INIT,
  CHECK_LOGIN_TOKEN_ACTION_ERROR,
} from "./const";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOGIN_ACTION_INIT:
      return {
        ...state,
        getLoginError: false,
        getLoginSuccess: false,
        getLoginLoading: true,
      }
    case GET_LOGIN_ACTION_ERROR:
      localStorage.removeItem('session-token')
      return {
        ...state,
        isLogged: false,
        getLoginError: true,
        getLoginSuccess: false,
        getLoginLoading: false,
        getLoginResponse: action.payload,
      }
    case GET_LOGIN_ACTION_SUCCESS:
      localStorage.setItem('session-token', action.payload.token)
      return {
        ...state,
        isLogged: true,
        info: action.payload.info,
        getLoginError: false,
        getLoginSuccess: true,
        getLoginLoading: false,
      }
    case GET_LOGIN_ACTION_RESET:
      return {
        ...state,
        getLoginError: false,
        getLoginSuccess: false,
        getLoginLoading: false,
      }
    case GET_LOGOUT_ACTION_INIT:
      return {
        ...state,
        getLogoutError: false,
        getLogoutSuccess: false,
        getLogoutLoading: true,
      }
    case GET_LOGOUT_ACTION_SUCCESS:
      localStorage.removeItem('session-token')
      return {
        ...state,
        isLogged: false,
        info: {},
        getLogoutError: false,
        getLogoutSuccess: true,
        getLogoutLoading: false,
      }
    case CHECK_LOGIN_TOKEN_ACTION_INIT:
      return {
        ...state,
        checkLoginError: false,
        checkLoginSuccess: false,
        checkLoginLoading: true,
      }
    case CHECK_LOGIN_TOKEN_ACTION_ERROR:
      localStorage.removeItem('session-token')
      return {
        ...state,
        isLogged: false,
        checkLoginError: true,
        checkLoginSuccess: false,
        checkLoginLoading: false,
        checkLoginResponse: action.payload,
      }
    case CHECK_LOGIN_TOKEN_ACTION_SUCCESS:
      return {
        ...state,
        isLogged: true,
        info: action.payload,
        checkLoginError: false,
        checkLoginSuccess: true,
        checkLoginLoading: false,
      }
    case CHECK_LOGIN_TOKEN_ACTION_RESET:
      return {
        ...state,
        checkLoginError: false,
        checkLoginSuccess: false,
        checkLoginLoading: false,
      }
    default:
      return {...state}
  }
}