import {
  DEL_SOL_ERROR,
  DEL_SOL_INIT,
  DEL_SOL_SUCCESS,
  ADD_SOL_ERROR,
  ADD_SOL_INIT,
  ADD_SOL_SUCCESS,
  ADD_SOL_RESET,
  SET_SOL_LIKE_ERROR,
  SET_SOL_LIKE_INIT,
  SET_SOL_LIKE_RESET,
  SET_SOL_LIKE_SUCCESS,
  DEL_SOL_RESET, ADD_SOL_USER_INIT, ADD_SOL_USER_SUCCESS, ADD_SOL_USER_ERROR, ADD_SOL_USER_RESET,

} from "./const";

import {delSolById, addSol, addSolLike, addSolUser} from "./server";

export const addSolAction = act => {
  return dispatch => {
    dispatch({type: ADD_SOL_INIT});
    addSol(act).then(response => {
      dispatch({type: ADD_SOL_SUCCESS})
    }).catch(() => {
      dispatch({type: ADD_SOL_ERROR})
    })
  }
};
export const resetAddSolAction = () => dispatch => dispatch({type:ADD_SOL_RESET})

export const addSolLikeAction = proy => {
  return dispatch => {
    dispatch({type: SET_SOL_LIKE_INIT});
    addSolLike(proy).then(response => {
      dispatch({type: SET_SOL_LIKE_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: SET_SOL_LIKE_ERROR})
    })
  }
};
export const resetAddSolUserAction = () => dispatch => dispatch({type:ADD_SOL_USER_RESET})

export const addSolUserAction = proy => {
  return dispatch => {
    dispatch({type: ADD_SOL_USER_INIT});
    addSolUser(proy).then(response => {
      dispatch({type: ADD_SOL_USER_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: ADD_SOL_USER_ERROR})
    })
  }
};
export const resetAddSolLikeAction = () => dispatch => dispatch({type:SET_SOL_LIKE_RESET})

export const delSolByIdAction = id => {
  return dispatch => {
    dispatch({type: DEL_SOL_INIT});
    delSolById(id).then(response => {
      dispatch({type: DEL_SOL_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: DEL_SOL_ERROR})
    })
  }
};
export const resetDelSolAction = () => dispatch => dispatch({type:DEL_SOL_RESET})

