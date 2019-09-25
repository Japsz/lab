import React, {useEffect} from 'react';
import EtapasLine from '../../components/desafio/EtapasLine';
import AllActs from '../../components/actualizacion/ShowAll';
import AllSols from '../../components/solucion/ShowAll';
import Info from '../../components/proyecto/Info';
import {Route,Link} from 'react-router-dom';
import AddActs from "./public/addActsSidebar";

import {connect} from "react-redux";

import {getProyByIdAction} from "../../store/proyecto/actions";

const ProyWall = (props) => {

  const {id} = props.match.params;

  useEffect(() => {
    props.setProy(id)
  },[])

  const {proy, integrantes, userInfo} = props
 return(
    <div className={'blog-content'}>
      <div className="container-fluid">
        <div className={'row'}>
          <div className="col-md-1 hidden-sm hidden-xs">
            <Link to={'/'}>
              <img src="/assets/img/lab/LAB_backArrow.png" className='go-back' alt="Volver"/>
            </Link>
            {
              integrantes.filter((item) => parseInt(item.iduser) === parseInt(userInfo.iduser)).length ? <AddActs/> : null
            }
          </div>
          <div className="col-md-11">
            <div className="col-md-12 hidden-sm hidden-xs">
              <EtapasLine />
            </div>
            <div className="col-sm-8 blog-main">
              <div className="col-sm-12">
                <div className='proy-tracker'>
                  <ol className="breadcrumb">
                    <li><Link to={`/`}>Proyectos</Link></li>
                    <li className={'active'}>{proy.titulo}</li>
                  </ol>
                </div>
                <h3 className="page-header">
                  {proy.titulo}
                </h3>
                <div className='proy-body'>
                  <div className='col-md-12'>
                    <p>
                      <img src={`/quantumapi${proy.media}`} alt="Imagen de Portada" className='img-thumbnail' style={{float: 'left', margin: '10px'}}/>
                      {proy.descripcion}
                    </p>
                  </div>
                </div>
              </div>
              <Route path={`${props.match.path}/public`} render={(props) => <AllActs {...props} id={id}/>}/>
              <Route path={`${props.match.path}/sol`} render={(props) => <AllSols {...props} private={false} id={id}/>}/>
            </div>
            <div className={'col-sm-4 blog-sidebar'}>
              <Info />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  proy: state.proys.proy.info,
  integrantes: state.proys.proy.users,
  userInfo: state.user.info,
})

const mapDispatchToProps = dispatch =>({
  setProy: payload => dispatch(getProyByIdAction(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProyWall);