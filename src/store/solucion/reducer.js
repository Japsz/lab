import {initialState} from "./initialState";
import {
  ADD_SOL_ERROR,
  ADD_SOL_INIT, ADD_SOL_RESET,
  ADD_SOL_SUCCESS,
  DEL_SOL_ERROR,
  DEL_SOL_INIT,
  DEL_SOL_SUCCESS,
  SET_SOL_LIKE_SUCCESS,
  SET_SOL_LIKE_RESET,
  SET_SOL_LIKE_INIT,
  SET_SOL_LIKE_ERROR, ADD_SOL_USER_INIT, ADD_SOL_USER_SUCCESS, ADD_SOL_USER_ERROR, ADD_SOL_USER_RESET,
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SOL_INIT: {
      return {
        ...state,
        addSolSuccess: false,
        addSolLoading: true,
      }
    }
    case ADD_SOL_SUCCESS: {
      return {
        ...state,
        addSolSuccess: true,
        addSolLoading: false,
        addSolError: false,
      }
    }
    case ADD_SOL_ERROR: {
      return {
        ...state,
        addSolInit: false,
        addSolLoading: false,
        addSolError: true,
      }
    }
    case ADD_SOL_RESET: {
      return {
        ...state,
        addSolSuccess: false,
      }
    }
    case ADD_SOL_USER_INIT: {
      return {
        ...state,
        addSolUserSuccess: false,
        addSolUserLoading: true,
      }
    }
    case ADD_SOL_USER_SUCCESS: {
      return {
        ...state,
        addSolUserSuccess: true,
        addSolUserLoading: false,
        addSolUserError: false,
        addSolUserResponse: action.payload,
      }
    }
    case ADD_SOL_USER_ERROR: {
      return {
        ...state,
        addSolUserInit: false,
        addSolUserLoading: false,
        addSolUserError: true,
      }
    }
    case ADD_SOL_USER_RESET: {
      return {
        ...state,
        addSolUserSuccess: false,
      }
    }
    case SET_SOL_LIKE_INIT: {
      return {
        ...state,
        likeSolLoading: true,
        likeSolError: false,
      }
    }
    case SET_SOL_LIKE_SUCCESS: {
      return {
        ...state,
        likeSolObj: action.payload,
        likeSolSuccess: true,
        likeSolLoading: false,
        likeSolError: false,
      }
    }
    case SET_SOL_LIKE_ERROR: {
      return {
        ...state,
        likeSolSuccess: false,
        likeSolLoading: false,
        likeSolError: true,
      }
    }
    case SET_SOL_LIKE_RESET: {
      return {
        ...state,
        likeSolSuccess: false,
        likeSolLoading: false,
        likeSolError: false,
      }
    }

    case DEL_SOL_INIT: {
      return {
        ...state,
        delSolLoading: true
      }
    }
    case DEL_SOL_SUCCESS: {
      return {
        ...state,
        delSol: action.payload,
        delSolLoading: false,
        delSolError: false,
      }
    }
    case DEL_SOL_ERROR: {
      return {
        ...state,
        delSol: {},
        delSolLoading: false,
        delSolError: true,
      }
    }
    default: {
      return state
    }
  }
}