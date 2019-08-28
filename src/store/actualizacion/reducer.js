import {initialState} from "./initialState";
import {
  ADD_ACT_ERROR,
  ADD_ACT_INIT, ADD_ACT_RESET,
  ADD_ACT_SUCCESS,
  DEL_ACT_ERROR,
  DEL_ACT_INIT,
  DEL_ACT_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ACT_INIT: {
      return {
        ...state,
        addActSuccess: false,
        addActLoading: true,
      }
    }
    case ADD_ACT_SUCCESS: {
      return {
        ...state,
        addActSuccess: true,
        addActLoading: false,
        addActError: false,
      }
    }
    case ADD_ACT_ERROR: {
      return {
        ...state,
        addActInit: false,
        addActLoading: false,
        addActError: true,
      }
    }
    case ADD_ACT_RESET: {
      return {
        ...state,
        addActSuccess: false,
      }
    }
    case DEL_ACT_INIT: {
      return {
        ...state,
        delActLoading: true
      }
    }
    case DEL_ACT_SUCCESS: {
      return {
        ...state,
        delAct: action.payload,
        delActLoading: false,
        delActError: false,
      }
    }
    case DEL_ACT_ERROR: {
      return {
        ...state,
        delAct: {},
        delActLoading: false,
        delActError: true,
      }
    }
    default: {
      return state
    }
  }
}