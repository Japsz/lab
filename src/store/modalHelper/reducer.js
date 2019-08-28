import {initState} from "./initialState";
import {SET_ACTION} from "./const";

export default function reducer(state = initState, action) {
  switch (action.type) {
    case SET_ACTION:
      return {
        ...state,
        tipo: parseInt(action.payload)
      }
    default:
      return {...state}
  }
}