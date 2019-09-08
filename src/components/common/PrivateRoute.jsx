import React from 'react';
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {checkTokenAction, resetCheckTokenAction} from "../../store/user/action";


const PrivateRoute = (props) => {

  const {info, isLogged} = props
  const token = localStorage.getItem('session-token')

  if (token === null) {
    return(<Redirect to={'/login'}/>)
  } else {
    if (isLogged) {
      return (<Route {...props}/>)
    } else {
      props.checkToken({token: localStorage.getItem('session-token')})
      return (<div> Cargando...</div>)
    }
  }
};

const mapStateToProps = state => ({
  ...state.user,
})
const mapDispatchToProps = dispatch => ({
  checkToken: payload => dispatch(checkTokenAction(payload)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);