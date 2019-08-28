import React, {useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import labApi from '../../APIs/ldi';
import './ShowAll.css';
import Proyecto from './Single';

const ShowAll  = props => {
  const [state, setState] = useState({
    proys: [],
    hasMore: true,
  })
  const fetchMoreData = async () => {
    const response = await labApi.get(`/proy/getAll/${state.proys.length}`);
    if( response.status === 200) {
      setState({...state, proys: state.proys.concat(response.data.rows), hasMore: response.data.hasMore})
    } else console.log('Api error');
  };
  useEffect(() => {
    fetchMoreData();
  },[])
  return(
    <div className={'col-sm-12 blog-main'} >
      <div className="row">
        <h2 className={'page-header pull-left'}>
          Proyectos en desarrollo
        </h2>
      </div>
      <div className="container-fluid">
          <InfiniteScroll
            dataLength={state.proys.length}
            next={fetchMoreData}
            hasMore={state.hasMore}
            loader={<div className={'strimload'}></div>}
            endMessage={<div className={'col-md-12'}><h3 style={{align: 'center'}}>No quedan Proyectos</h3></div>}
          >
            {state.proys.map((item, index) => {
              return <div className={'col-sm-6 col-md-4 col-xs-12'} style={{display: 'inline-flex', marginTop: 0}} key={index}><Proyecto  obj={item}/></div>
            })}
          </InfiniteScroll>
      </div>
    </div>
  )
}

export default ShowAll;