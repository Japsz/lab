import {initialState} from "./initialState";
import {
  ADD_INTERN_COMMENT_ERROR,
  ADD_INTERN_COMMENT_INIT, ADD_INTERN_COMMENT_RESET,
  ADD_INTERN_COMMENT_SUCCESS,
  DEL_INTERN_COMMENT_ERROR,
  DEL_INTERN_COMMENT_INIT,
  DEL_INTERN_COMMENT_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INTERN_COMMENT_INIT: {
      return {
        ...state,
        addCommentInternSuccess: false,
        addCommentInternLoading: true,
      }
    }
    case ADD_INTERN_COMMENT_SUCCESS: {
      return {
        ...state,
        addCommentInternSuccess: true,
        addCommentInternLoading: false,
        addCommentInternError: false,
        addCommentInternResponse: action.payload,
      }
    }
    case ADD_INTERN_COMMENT_ERROR: {
      return {
        ...state,
        addCommentInternInit: false,
        addCommentInternLoading: false,
        addCommentInternError: true,
      }
    }
    case ADD_INTERN_COMMENT_RESET: {
      return {
        ...state,
        addCommentInternSuccess: false,
      }
    }
    case DEL_INTERN_COMMENT_INIT: {
      return {
        ...state,
        delCommentInternLoading: true
      }
    }
    case DEL_INTERN_COMMENT_SUCCESS: {
      return {
        ...state,
        delCommentIntern: action.payload,
        delCommentInternLoading: false,
        delCommentInternError: false,
      }
    }
    case DEL_INTERN_COMMENT_ERROR: {
      return {
        ...state,
        delCommentIntern: {},
        delCommentInternLoading: false,
        delCommentInternError: true,
      }
    }
    default: {
      return state
    }
  }
}