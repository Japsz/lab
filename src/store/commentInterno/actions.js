import {
  DEL_INTERN_COMMENT_ERROR,
  DEL_INTERN_COMMENT_INIT,
  DEL_INTERN_COMMENT_SUCCESS,
  ADD_INTERN_COMMENT_ERROR,
  ADD_INTERN_COMMENT_INIT,
  ADD_INTERN_COMMENT_SUCCESS,
  ADD_INTERN_COMMENT_RESET,
  SET_INTERN_COMMENT_LIKE_ERROR,
  SET_INTERN_COMMENT_LIKE_INIT,
  SET_INTERN_COMMENT_LIKE_RESET,
  SET_INTERN_COMMENT_LIKE_SUCCESS,
  DEL_INTERN_COMMENT_RESET,

} from "./const";

import {delCommentInternoById, addCommentInterno, addCommentInternoLike} from "./server";

export const addCommentInternoAction = act => {
  return dispatch => {
    dispatch({type: ADD_INTERN_COMMENT_INIT});
    addCommentInterno(act).then(response => {
      dispatch({type: ADD_INTERN_COMMENT_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: ADD_INTERN_COMMENT_ERROR})
    })
  }
};
export const resetAddCommentInternoAction = () => dispatch => dispatch({type:ADD_INTERN_COMMENT_RESET})

export const addCommentInternoLikeAction = proy => {
  return dispatch => {
    dispatch({type: SET_INTERN_COMMENT_LIKE_INIT});
    addCommentInternoLike(proy).then(response => {
      dispatch({type: SET_INTERN_COMMENT_LIKE_SUCCESS, payload: response.data.newState})
    }).catch(() => {
      dispatch({type: SET_INTERN_COMMENT_LIKE_ERROR})
    })
  }
};
export const resetAddCommentInternoLikeAction = () => dispatch => dispatch({type:SET_INTERN_COMMENT_LIKE_RESET})

export const delCommentInternoByIdAction = id => {
  return dispatch => {
    dispatch({type: DEL_INTERN_COMMENT_INIT});
    delCommentInternoById(id).then(response => {
      dispatch({type: DEL_INTERN_COMMENT_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: DEL_INTERN_COMMENT_ERROR})
    })
  }
};
export const resetDelCommentInternoAction = () => dispatch => dispatch({type:DEL_INTERN_COMMENT_RESET})

