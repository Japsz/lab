import {
  DEL_ACT_ERROR,
  DEL_ACT_INIT,
  DEL_ACT_SUCCESS,
  ADD_ACT_ERROR,
  ADD_ACT_INIT,
  ADD_ACT_SUCCESS, ADD_ACT_RESET
} from "./const";

import {delActById, addAct, addActLike} from "./server";
import {ADD_SOL_RESET} from "../solucion/const";

export const addActAction = act => {
  return dispatch => {
    dispatch({type: ADD_ACT_INIT});
    addAct(act).then(response => {
      dispatch({type: ADD_ACT_SUCCESS})
      dispatch({type: ADD_ACT_RESET})
    }).catch(() => {
      dispatch({type: ADD_ACT_ERROR})
    })
  }
};
export const resetAddActAction = () => dispatch => dispatch({type:ADD_ACT_RESET})

export const addActLikeAction = proy => {
  return dispatch => {
    dispatch({type: ADD_ACT_INIT});
    addActLike(proy).then(response => {
      dispatch({type: ADD_ACT_SUCCESS, payload: response.data.newState})
      setTimeout(() => dispatch({type: ADD_ACT_RESET}), 500)
    }).catch(() => {
      dispatch({type: ADD_ACT_ERROR})
    })
  }
};

export const delActByIdAction = id => {
  return dispatch => {
    dispatch({type: DEL_ACT_INIT});
    delActById(id).then(response => {
      dispatch({type: DEL_ACT_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: DEL_ACT_ERROR})
    })
  }
};

