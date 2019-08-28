import {combineReducers} from "redux";
import modalHelper from './modalHelper/reducer'
import proys from './proyecto/reducer'
import user from './user/reducer'
import acts from './actualizacion/reducer'
import sols from './solucion/reducer'
import internPost from './postInterno/reducer'
import internComment from './commentInterno/reducer'
import avance from "./avance/reducer";

export default combineReducers({
  modalHelper,
  proys,
  user,
  acts,
  sols,
  internPost,
  internComment,
  avance,
})