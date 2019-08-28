import React from 'react';
import {Link} from 'react-router-dom';
import UserNav from './usrNav';

const Header = () => {
    return (
        <div className='navbar navbar-inverse navbar-material-blog navbar-absolute-top' style={{backgroundColor: '#009688'}}>
            <div className='navbar-wrapper container' style={{marginRight: 0, marginLeft: '5%', width: '90%'}}>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-responsive-collapse'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                </div>
                <div className='navbar-collapse collapse navbar-responsive-collapse'>
                    <Link to={'/'} className="navbar-brand" style={{padding: 0,paddingTop: '5px',  maxHeight: '50px'}}>
                        <div style={{margin: 0, padding: '5px'}}>
                            <img className="material-icons" src={'/assets/img/iso_iso.png'} style={{maxHeight: '40px', width: 'auto'}}/>
                        </div>
                    </Link>
                    <ul className='nav navbar-nav' style={{maxHeight: '50px'}}>
                        <li>
                            <Link to={'/'} className='navItem'>
                                <h4>| Todos los proyectos |</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/user/proy'} className='navItem'>
                                <h4>| Mis Proyectos |</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className='navItem'>
                                <h4>| Como Funciona |</h4>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} className='navItem'>
                                <h4>| Nosotros ObservaCiudadanía |</h4>
                            </Link>
                        </li>
                    </ul>
                    <UserNav/>
                </div>
            </div>
        </div>
    )
};

export default Header;