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
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
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