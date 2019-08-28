import {initialState} from "./initialState";
import {
  ADD_INTERN_POST_ERROR,
  ADD_INTERN_POST_INIT,
  ADD_INTERN_POST_RESET,
  ADD_INTERN_POST_SUCCESS,
  DEL_INTERN_POST_ERROR,
  DEL_INTERN_POST_INIT,
  DEL_INTERN_POST_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INTERN_POST_INIT: {
      return {
        ...state,
        addPostInternSuccess: false,
        addPostInternLoading: true,
      }
    }
    case ADD_INTERN_POST_SUCCESS: {
      return {
        ...state,
        addPostInternSuccess: true,
        addPostInternLoading: false,
        addPostInternError: false,
        addPostInternResponse: action.payload,
      }
    }
    case ADD_INTERN_POST_ERROR: {
      return {
        ...state,
        addPostInternInit: false,
        addPostInternLoading: false,
        addPostInternError: true,
      }
    }
    case ADD_INTERN_POST_RESET: {
      return {
        ...state,
        addPostInternSuccess: false,
      }
    }
    case DEL_INTERN_POST_INIT: {
      return {
        ...state,
        delPostInternLoading: true
      }
    }
    case DEL_INTERN_POST_SUCCESS: {
      return {
        ...state,
        delPostIntern: action.payload,
        delPostInternLoading: false,
        delPostInternError: false,
      }
    }
    case DEL_INTERN_POST_ERROR: {
      return {
        ...state,
        delPostIntern: {},
        delPostInternLoading: false,
        delPostInternError: true,
      }
    }
    default: {
      return state
    }
  }
}