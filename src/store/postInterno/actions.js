import {
  DEL_INTERN_POST_ERROR,
  DEL_INTERN_POST_INIT,
  DEL_INTERN_POST_SUCCESS,
  ADD_INTERN_POST_ERROR,
  ADD_INTERN_POST_INIT,
  ADD_INTERN_POST_SUCCESS,
  ADD_INTERN_POST_RESET,
  SET_INTERN_POST_LIKE_ERROR,
  SET_INTERN_POST_LIKE_INIT,
  SET_INTERN_POST_LIKE_RESET,
  SET_INTERN_POST_LIKE_SUCCESS,
  DEL_INTERN_POST_RESET,

} from "./const";

import {delInternPostById, addInternPost, addInternPostLike} from "./server";

export const addInternPostAction = act => {
  return dispatch => {
    dispatch({type: ADD_INTERN_POST_INIT});
    addInternPost(act).then(response => {
      dispatch({type: ADD_INTERN_POST_SUCCESS, payload: {idpostinterno: response.data.id, ...act}})
    }).catch(() => {
      dispatch({type: ADD_INTERN_POST_ERROR})
    })
  }
};
export const resetAddInternPostAction = () => dispatch => dispatch({type:ADD_INTERN_POST_RESET})

export const addInternPostLikeAction = proy => {
  return dispatch => {
    dispatch({type: SET_INTERN_POST_LIKE_INIT});
    addInternPostLike(proy).then(response => {
      dispatch({type: SET_INTERN_POST_LIKE_SUCCESS, payload: response.data.newState})
    }).catch(() => {
      dispatch({type: SET_INTERN_POST_LIKE_ERROR})
    })
  }
};
export const resetAddInternPostLikeAction = () => dispatch => dispatch({type:SET_INTERN_POST_LIKE_RESET})

export const delInternPostByIdAction = id => {
  return dispatch => {
    dispatch({type: DEL_INTERN_POST_INIT});
    delInternPostById(id).then(response => {
      dispatch({type: DEL_INTERN_POST_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: DEL_INTERN_POST_ERROR})
    })
  }
};
export const resetDelInternPostAction = () => dispatch => dispatch({type:DEL_INTERN_POST_RESET})

