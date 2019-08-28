import {SET_ACTION} from "./const";

export const add = payload => dispatch => dispatch({type: SET_ACTION, payload: payload})