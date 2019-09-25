import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getLogoutAction} from "../../store/user/action";


const UserNav = props => {
  const {username, avatar_pat} = props.userInfo
  return (
    <ul className='nav navbar-nav navbar-right'>
      <li>
        {props.isLogged ?
          <Link to={'/'} className={'navbar-link'}>
            {username}
          </Link>
          :
          <Link to={'/login'} className={'navbar-link'}>
            Inicia Sesión
          </Link>
        }
      </li>
      {props.isLogged ?
        <Fragment>
          <li>
            <img className='navbar-link navbar-brand img-circle material-icons' style={{margin: 'auto', display: 'block', width: '60px', height: '60px'}} alt={'Foto de perfil'} src={(avatar_pat && avatar_pat !== '/assets/img/placeholder.png') ? `/quantumapi${avatar_pat}` : '/assets/img/placeholder.png'}/>
          </li>
          <li>
            <a href={'#'} onClick={() => props.logout()} className='navbar-link'>Salir</a>
          </li>
        </Fragment>
        : null
      }
    </ul>
  );
};

const mapStateToProps = state => ({
  userInfo: state.user.info,
  isLogged: state.user.isLogged
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(getLogoutAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(UserNav);