import {
  DEL_AVANCE_ERROR,
  DEL_AVANCE_INIT,
  DEL_AVANCE_SUCCESS,
  ADD_AVANCE_ERROR,
  ADD_AVANCE_INIT,
  ADD_AVANCE_SUCCESS,
  ADD_AVANCE_RESET,
  SET_AVANCE_LIKE_ERROR,
  SET_AVANCE_LIKE_INIT,
  SET_AVANCE_LIKE_RESET,
  SET_AVANCE_LIKE_SUCCESS,
  DEL_AVANCE_RESET,
  PRE_APROVE_AVANCE_INIT,
  PRE_APROVE_AVANCE_SUCCESS,
  PRE_APROVE_AVANCE_ERROR,
  PRE_APROVE_AVANCE_RESET,
  POSTULATE_AVANCE_ERROR,
  POSTULATE_AVANCE_SUCCESS,
  POSTULATE_AVANCE_INIT,
  POSTULATE_AVANCE_RESET,
  GET_AVANCE_INIT,
  GET_AVANCE_SUCCESS, GET_AVANCE_ERROR, GET_AVANCE_RESET,

} from "./const";

import {delAvanceById, addAvance, addAvanceLike, preAproveAvance, postulateAvance, getAvanceById} from "./server";
//Agregar Avance
export const addAvanceAction = act => {
  return dispatch => {
    dispatch({type: ADD_AVANCE_INIT});
    addAvance(act).then(response => {
      dispatch({type: ADD_AVANCE_SUCCESS})
    }).catch(() => {
      dispatch({type: ADD_AVANCE_ERROR})
    })
  }
};
export const resetAddAvanceAction = () => dispatch => dispatch({type:ADD_AVANCE_RESET})
//Dar like
export const addAvanceLikeAction = avance => {
  return dispatch => {
    dispatch({type: SET_AVANCE_LIKE_INIT});
    addAvanceLike(avance).then(response => {
      dispatch({type: SET_AVANCE_LIKE_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: SET_AVANCE_LIKE_ERROR})
    })
  }
};
export const resetAddAvanceLikeAction = () => dispatch => dispatch({type:SET_AVANCE_LIKE_RESET})

export const resetPreAproveAvanceAction = () => dispatch => dispatch({type:PRE_APROVE_AVANCE_RESET})

export const preAproveAvanceAction = avance => {
  return dispatch => {
    dispatch({type: PRE_APROVE_AVANCE_INIT});
    preAproveAvance(avance).then(response => {
      dispatch({type: PRE_APROVE_AVANCE_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: PRE_APROVE_AVANCE_ERROR})
    })
  }
};

export const resetPostulateAvanceAction = () => dispatch => dispatch({type:POSTULATE_AVANCE_RESET})

export const postulateAvanceAction = avance => {
  return dispatch => {
    dispatch({type: POSTULATE_AVANCE_INIT});
    postulateAvance(avance).then(response => {
      dispatch({type: POSTULATE_AVANCE_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: POSTULATE_AVANCE_ERROR})
    })
  }
};



export const delAvanceByIdAction = id => {
  return dispatch => {
    dispatch({type: DEL_AVANCE_INIT});
    delAvanceById(id).then(response => {
      dispatch({type: DEL_AVANCE_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: DEL_AVANCE_ERROR})
    })
  }
};
export const resetDelAvanceAction = () => dispatch => dispatch({type:DEL_AVANCE_RESET})

export const getAvanceByIdAction = id => {
  return dispatch => {
    dispatch({type: GET_AVANCE_INIT});
    getAvanceById(id).then(response => {
      dispatch({type: GET_AVANCE_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_AVANCE_ERROR})
    })
  }
};
export const resetGetAvanceByIdAction = () => dispatch => dispatch({type:GET_AVANCE_RESET})

