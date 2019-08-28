import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


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
          <Link to={'/'} className={'navbar-link'}>
            Inicia Sesión
          </Link>
        }
      </li>
      {props.isLogged ?
        <Fragment>
          <li>
            <img className='navbar-link navbar-brand img-circle material-icons' style={{margin: 'auto', display: 'block', width: '60px', height: '60px'}} alt={'Foto de perfil'} src={avatar_pat}/>
          </li>
          <li>
            <Link to={'/'} className='navbar-link'>Salir</Link>
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
export default connect(mapStateToProps,null)(UserNav);