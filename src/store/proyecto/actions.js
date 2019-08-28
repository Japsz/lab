import {
  GET_PROY_ERROR,
  GET_PROY_INIT,
  GET_PROY_SUCCESS,
  SET_PROY_LIKE_ERROR,
  SET_PROY_LIKE_INIT,
  SET_PROY_LIKE_SUCCESS,
  SET_PROY_LIKE_RESET,
  ADD_PROY_ERROR,
  ADD_PROY_INIT,
  ADD_PROY_SUCCESS,
  ADD_PROY_RESET,
} from "./const";

import {getProyById, addProy, addProyLike} from "./server";

export const resetAddProyAction = () => dispatch => dispatch({type:ADD_PROY_RESET})
export const addProyAction = proy => {
  return dispatch => {
    dispatch({type: ADD_PROY_INIT});
    addProy(proy).then(response => {
      dispatch({type: ADD_PROY_SUCCESS, payload: response.data.idproyecto})
    }).catch(() => {
      dispatch({type: ADD_PROY_ERROR})
    })
  }
};

export const resetAddProyLikeAction = () => dispatch => dispatch({type:SET_PROY_LIKE_RESET})
export const addProyLikeAction = proy => {
  return dispatch => {
    dispatch({type: SET_PROY_LIKE_INIT});
    addProyLike(proy).then(response => {
      dispatch({type: SET_PROY_LIKE_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: SET_PROY_LIKE_ERROR})
    })
  }
};

export const getProyByIdAction = id => {
  return dispatch => {
    dispatch({type: GET_PROY_INIT});
    getProyById(id).then(response => {
      dispatch({type: GET_PROY_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_PROY_ERROR})
    })
  }
};

