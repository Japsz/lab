import {initialState} from "./initialState";
import {
  ADD_PROY_ERROR,
  ADD_PROY_INIT, ADD_PROY_RESET,
  ADD_PROY_SUCCESS,
  GET_PROY_ERROR,
  GET_PROY_INIT,
  GET_PROY_SUCCESS,
  SET_PROY_LIKE_ERROR,
  SET_PROY_LIKE_INIT,
  SET_PROY_LIKE_SUCCESS,
  SET_PROY_LIKE_RESET,
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PROY_INIT: {
      return {
        ...state,
        addProySuccess: false,
        addProyLoading: true,
      }
    }
    case ADD_PROY_SUCCESS: {
      return {
        ...state,
        addProySuccess: true,
        addProyLoading: false,
        addProyError: false,
        idProyRedirect: action.payload,
      }
    }
    case ADD_PROY_ERROR: {
      return {
        ...state,
        addProyInit: false,
        addProyLoading: false,
        addProyError: true,
      }
    }
    case ADD_PROY_RESET: {
      return {
        ...state,
        addProySuccess: false,
        addProyInit: false,
        addProyLoading: false,
      }
    }
    case GET_PROY_INIT: {
      return {
        ...state,
        proyLoading: true
      }
    }
    case GET_PROY_SUCCESS: {
      return {
        ...state,
        proy: action.payload,
        proyLoading: false,
        proyError: false,
      }
    }
    case GET_PROY_ERROR: {
      return {
        ...state,
        proy: {},
        proyLoading: false,
        proyError: true,
      }
    }
    case SET_PROY_LIKE_INIT: {
      return {
        ...state,
        likeProyLoading: true,
        likeProyError: false,
      }
    }
    case SET_PROY_LIKE_SUCCESS: {
      return {
        ...state,
        likeProyObj: action.payload,
        likeProySuccess: true,
        likeProyLoading: false,
        likeProyError: false,
      }
    }
    case SET_PROY_LIKE_ERROR: {
      return {
        ...state,
        likeProySuccess: false,
        likeProyLoading: false,
        likeProyError: true,
      }
    }
    case SET_PROY_LIKE_RESET: {
      return {
        ...state,
        likeProySuccess: false,
        likeProyLoading: false,
        likeProyError: false,
      }
    }
    default: {
      return state
    }
  }
}