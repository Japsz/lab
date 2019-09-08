import {initialState} from "./initialState";
import {
  ADD_AVANCE_ERROR,
  ADD_AVANCE_INIT, ADD_AVANCE_RESET,
  ADD_AVANCE_SUCCESS,
  DEL_AVANCE_ERROR,
  DEL_AVANCE_INIT,
  DEL_AVANCE_SUCCESS,
  SET_AVANCE_LIKE_SUCCESS,
  SET_AVANCE_LIKE_RESET,
  SET_AVANCE_LIKE_INIT,
  SET_AVANCE_LIKE_ERROR, PRE_APROVE_AVANCE_INIT, PRE_APROVE_AVANCE_SUCCESS, PRE_APROVE_AVANCE_ERROR, PRE_APROVE_AVANCE_RESET,
  GET_AVANCE_ERROR, GET_AVANCE_INIT, GET_AVANCE_RESET, GET_AVANCE_SUCCESS,
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_AVANCE_INIT: {
      return {
        ...state,
        getAvanceSuccess: false,
        getAvanceLoading: true,
      }
    }
    case GET_AVANCE_SUCCESS: {
      return {
        ...state,
        getAvanceSuccess: true,
        getAvanceLoading: false,
        getAvanceError: false,
        getAvanceResponse: action.payload,
      }
    }
    case GET_AVANCE_ERROR: {
      return {
        ...state,
        getAvanceInit: false,
        getAvanceLoading: false,
        getAvanceError: true,
      }
    }
    case GET_AVANCE_RESET: {
      return {
        ...state,
        getAvanceSuccess: false,
      }
    }
    case ADD_AVANCE_INIT: {
      return {
        ...state,
        addAvanceSuccess: false,
        addAvanceLoading: true,
      }
    }
    case ADD_AVANCE_SUCCESS: {
      return {
        ...state,
        addAvanceSuccess: true,
        addAvanceLoading: false,
        addAvanceError: false,
      }
    }
    case ADD_AVANCE_ERROR: {
      return {
        ...state,
        addAvanceInit: false,
        addAvanceLoading: false,
        addAvanceError: true,
      }
    }
    case ADD_AVANCE_RESET: {
      return {
        ...state,
        addAvanceSuccess: false,
      }
    }
    case PRE_APROVE_AVANCE_INIT: {
      return {
        ...state,
        preAproveAvanceSuccess: false,
        preAproveAvanceLoading: true,
      }
    }
    case PRE_APROVE_AVANCE_SUCCESS: {
      return {
        ...state,
        preAproveAvanceSuccess: true,
        preAproveAvanceLoading: false,
        preAproveAvanceError: false,
        preAproveAvanceResponse: action.payload,
      }
    }
    case PRE_APROVE_AVANCE_ERROR: {
      return {
        ...state,
        preAproveAvanceInit: false,
        preAproveAvanceLoading: false,
        preAproveAvanceError: true,
      }
    }
    case PRE_APROVE_AVANCE_RESET: {
      return {
        ...state,
        preAproveAvanceSuccess: false,
      }
    }
    case SET_AVANCE_LIKE_INIT: {
      return {
        ...state,
        likeAvanceLoading: true,
        likeAvanceError: false,
      }
    }
    case SET_AVANCE_LIKE_SUCCESS: {
      return {
        ...state,
        likeAvanceObj: action.payload,
        likeAvanceSuccess: true,
        likeAvanceLoading: false,
        likeAvanceError: false,
      }
    }
    case SET_AVANCE_LIKE_ERROR: {
      return {
        ...state,
        likeAvanceSuccess: false,
        likeAvanceLoading: false,
        likeAvanceError: true,
      }
    }
    case SET_AVANCE_LIKE_RESET: {
      return {
        ...state,
        likeAvanceSuccess: false,
        likeAvanceLoading: false,
        likeAvanceError: false,
      }
    }

    case DEL_AVANCE_INIT: {
      return {
        ...state,
        delAvanceLoading: true
      }
    }
    case DEL_AVANCE_SUCCESS: {
      return {
        ...state,
        delAvance: action.payload,
        delAvanceLoading: false,
        delAvanceError: false,
      }
    }
    case DEL_AVANCE_ERROR: {
      return {
        ...state,
        delAvance: {},
        delAvanceLoading: false,
        delAvanceError: true,
      }
    }
    default: {
      return state
    }
  }
}