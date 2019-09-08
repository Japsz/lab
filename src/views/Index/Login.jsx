import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {getLoginAction, resetGetLoginAction} from "../../store/user/action";
import {useAlert} from "react-alert";
import {Redirect} from "react-router";

const Login = props => {
  const [credentials, setCredentials] = useState({username: '', password: ''})
  const alert = useAlert()
  const handleChange = ({target: {name, value}}) => {
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }
  const {isErrored, errorResponse, isLoading, isSuccess} = props
  const handleSubmit = e => {
    e.preventDefault()
    props.getLogin(credentials)
  }
  useEffect(() => {
    if (isErrored) alert.error(errorResponse.msg)
  }, [isErrored, errorResponse])

  if (isSuccess){
    props.resetLogin()
    return (<Redirect to={'/'}/>)
  }
  return (
    <div className="container blog-content">
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="login-panel panel panel-default">
            <div className="panel-body">
              <div className='blog-post'>
                <h3 className="blog-post-title">Inicia sesión</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input className="form-control" placeholder="Usuario" name="username" onChange={handleChange} value={credentials.username} type="text" autoFocus/>
                  </div>
                  <div className="form-group">
                    <input className="form-control" placeholder="Contraseña" name="password" type="password" onChange={handleChange} value={credentials.password}/>
                  </div>
                  <button type="submit" className="btn btn-lg btn-success btn-block" disabled={isLoading ? true : false}>Login <i className="fa fa-sign-in"/></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
  isErrored: state.user.getLoginError,
  isLoading: state.user.getLoginLoading,
  isSuccess: state.user.getLoginSuccess,
  errorResponse: state.user.getLoginResponse,
})

const mapDispatchToProps = dispatch => ({
  getLogin: payload => dispatch(getLoginAction(payload)),
  resetLogin: () => dispatch(resetGetLoginAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)