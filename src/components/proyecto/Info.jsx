import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


const Info = props => {
  const {idproyecto, idcreador} = props.info;
  const [isMember, setIsMember] = useState(false)
  const {integrantes} = props
  return (
    <div className="sidebar-module">
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="sidebar-info-title"><img src="/assets/img/lab/LAB_equipo.png" className='img_40' alt="Equipo"/> Equipo</h4>
          <br/>
          { integrantes.map((item, index) =>
            {
              if((parseInt(item.iduser) === parseInt(props.userInfo.iduser)) && !isMember) setIsMember(true)
              return (<div className="proy-colaborator" style={{display: 'flex', margin: '10px'}} key={index}>
                <img src={`http://localhost:8081${item.avatar_pat}`}  className={'img-responsive img-circle'} alt={'Icono'} style={{margin: 0, height: '30px', width:'30px'}} />
                <p style={{marginLeft: '10px'}}>{item.username}</p>
                <span className={`label ${parseInt(idcreador) === parseInt(item.iduser) ? 'label-danger' : 'label-primary'}`} style={{marginLeft: '4px'}}>
                  {parseInt(idcreador) === parseInt(item.iduser) ? 'Creador' : item.badge}
                </span>
              </div>)
            }
          )}
          <br/>
          <Link className="btn btn-success" to={`/proy/${idproyecto}/sol`}>Ver soluciones</Link>
          {isMember ? <Link className="btn btn-success" to={`/intern/${idproyecto}/posts`}>Ver Muro interno</Link> : null}
          <Link className="btn btn-success" to={`/proy/${idproyecto}/public`}>Muro Publico</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  integrantes: state.proys.proy.users,
  info: state.proys.proy.info,
  userInfo: state.user.info,
})

export default connect(mapStateToProps,null)(Info);