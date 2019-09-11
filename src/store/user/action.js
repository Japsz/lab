import {
  GET_LOGIN_ACTION_ERROR,
  GET_LOGIN_ACTION_INIT,
  GET_LOGIN_ACTION_RESET,
  GET_LOGIN_ACTION_SUCCESS,
  GET_LOGOUT_ACTION_ERROR,
  GET_LOGOUT_ACTION_INIT,
  GET_LOGOUT_ACTION_RESET,
  GET_LOGOUT_ACTION_SUCCESS,
  CHECK_LOGIN_TOKEN_ACTION_ERROR,
  CHECK_LOGIN_TOKEN_ACTION_INIT,
  CHECK_LOGIN_TOKEN_ACTION_RESET,
  CHECK_LOGIN_TOKEN_ACTION_SUCCESS,
} from "./const";
import {checkToken, getLogin, getLogout} from "./server";

export const getLoginAction = credentials => {
  return dispatch => {
    dispatch({type: GET_LOGIN_ACTION_INIT});
    getLogin(credentials).then(response => {
      if (response.data.err) dispatch({type: GET_LOGIN_ACTION_ERROR, payload: {msg: response.data.error}})
      else dispatch({type: GET_LOGIN_ACTION_SUCCESS, payload: response.data})
    }).catch((e) => {
      dispatch({type: GET_LOGIN_ACTION_ERROR, payload: {msg: 'Ocurrió un error desconocido'}})
    })
  }
};
export const resetGetLoginAction = () => {
  return dispatch => {
    dispatch({type: GET_LOGIN_ACTION_RESET})
  }
}

export const getLogoutAction = () => {
  return dispatch => dispatch({type: GET_LOGOUT_ACTION_SUCCESS})
};
export const resetGetLogoutAction = () => {
  return dispatch => {
    dispatch({type: GET_LOGOUT_ACTION_RESET})
  }
}

export const checkTokenAction = credentials => {
  return dispatch => {
    dispatch({type: CHECK_LOGIN_TOKEN_ACTION_INIT});
    checkToken(credentials).then(response => {
      if (response.data.err) dispatch({type: CHECK_LOGIN_TOKEN_ACTION_ERROR, payload:response.data.error})
      else dispatch({type: CHECK_LOGIN_TOKEN_ACTION_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: CHECK_LOGIN_TOKEN_ACTION_ERROR})
    })
  }
};
export const resetCheckTokenAction = () => {
  return dispatch => {
    dispatch({type: CHECK_LOGIN_TOKEN_ACTION_RESET})
  }
}