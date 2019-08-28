import React, {useEffect, useState} from 'react';
import EtapasLine from '../../components/desafio/EtapasLine';
import AllAvants from '../../components/avance/ShowAll';
import AllSols from '../../components/solucion/ShowAll';
import AllPosts from '../../components/postInterno/ShowAll';
import Info from '../../components/proyecto/Info';
import {Route, Link, Switch} from 'react-router-dom';
import '../../components/postInterno/ShowAll.css'
import {connect} from "react-redux";

import {getProyByIdAction} from "../../store/proyecto/actions";
import Navigator from "./private/navigator";
import {resetAddSolUserAction} from "../../store/solucion/actions";

const ProyWall = (props) => {

  const {id, section} = props.match.params;
  const {isAddUserSuccess} = props

  useEffect(() => {
    props.setProy(id)
  },[])

  useEffect(() => {
    if (isAddUserSuccess) {
      props.setProy(id)
      props.resetAddUser()
    }
  }, [isAddUserSuccess])

  const {proy} = props
  return(
    <div className={'blog-content'}>
      <div className="container-fluid">
        <div className={'row'}>
          <div className="col-md-1 hidden-sm hidden-xs">
            <Link to={'/'}>
              <img src="/assets/img/lab/LAB_backArrow.png" className='go-back' alt="Volver"/>
            </Link>
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
                    <li><Link to={`/proy/${proy.idproyecto}/public`}>{proy.titulo}</Link></li>
                    <li className={'active'}>Muro Interno</li>
                  </ol>
                </div>
                <h3 className="page-header">
                  Muro Interno de {proy.titulo}
                </h3>
                <Navigator id={id} section={section}/>
              </div>
              <Switch>
                <Route exact path={`/intern/:id/avances`} render={(props) => <AllAvants {...props} id={id}/>}/>
                <Route exact path={`/intern/:id/sol`} render={(props) => <AllSols {...props} private={true} id={id}/>}/>
                <Route exact path={`/intern/:id/posts`} render={(props) => <AllPosts {...props} id={id}/>}/>
              </Switch>
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
  isAddUserSuccess: state.sols.addSolUserSuccess,
})

const mapDispatchToProps = dispatch =>({
  setProy: payload => dispatch(getProyByIdAction(payload)),
  resetAddUser: () => dispatch(resetAddSolUserAction()),
})

export default connect(mapStateToProps,mapDispatchToProps)(ProyWall);