import React, {useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import labApi from '../../APIs/ldi';
import './ShowAll.css';
import Proyecto from './Single';
import {Redirect} from "react-router";

const ShowAll  = props => {
  const {self} = props
  const [redirect, setRedirect] = useState({state: false, to: ''})
  const [state, setState] = useState({
    proys: [],
    hasMore: true,
  })
  const fetchMoreData = async () => {
    let query

    if(self){
      query = `proy/getMine/${state.proys.length}`
    } else {
      query = `proy/getAll/${state.proys.length}`
    }
    const response = await labApi.get(query,{headers: {authorization: localStorage.getItem('session-token')}});

    if( response.status === 200) {
      setState({...state, proys: state.proys.concat(response.data.rows), hasMore: response.data.hasMore})
    } else if (response.status === 400 || response.status === 401){
      setRedirect({state: true, to: '/login'})
    } else {
      console.log('Api error');
    }
  };

  useEffect(() => {
    fetchMoreData();
  },[])

  if (redirect.state){
    return <Redirect to={redirect.to}/>
  } else
  return(
    <div className={`${self ? 'col-md-10 col-md-offset-1' : 'col-sm-12'} blog-main`} >
      <div className="row">
        <h2 className={'page-header pull-left'}>
          {self ? 'Mis Proyectos' : 'Proyectos en desarrollo'}
        </h2>
      </div>
      <div className="container-fluid">
          <InfiniteScroll
            dataLength={state.proys.length}
            next={fetchMoreData}
            hasMore={state.hasMore}
            loader={<div className={'strimload'}></div>}
            endMessage={<div className={'col-md-12'}><h3 style={{align: 'center'}}>No quedan proyectos que mostrar</h3></div>}
          >
            {state.proys.map((item, index) => {
              if(self) {
                return <div className={'col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-xs-12'} style={{display: 'inline-flex', marginTop: 0}} key={index}><Proyecto  obj={item}/></div>
              } else
              return <div className={'col-sm-6 col-md-4 col-xs-12'} style={{display: 'inline-flex', marginTop: 0}} key={index}><Proyecto  obj={item}/></div>
            })}
          </InfiniteScroll>
      </div>
    </div>
  )
}

export default ShowAll;