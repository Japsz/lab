import React, {useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import labApi from '../../APIs/ldi';
import './ShowAll.css';
import PostInterno from './Single';
import {connect} from "react-redux";

import ReactModal from "react-responsive-modal";
import CreateModal from "./createModal";
import {resetAddInternPostAction} from "../../store/postInterno/actions";

const ShowAll = (props) => {

  const [state, setState] = useState({
    posts: [],
    hasMore: true,
  })

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchMoreData()
  }, [])
  const {isAddSuccess, lastAdded} = props
  useEffect(() => {
    if(isAddSuccess) {
      let data = {
        iduser: props.info.iduser,
        username: props.info.username,
        iconouser: props.info.avatar_pat,
        idpostinterno: lastAdded.id,
        fecha: new Date().toISOString(),
        texto1: lastAdded.texto1,
      }
      let array = state.posts
      array.unshift(data)
      setState({...state, posts: array})
      props.resetAddInternPost()
    }
  }, [isAddSuccess, lastAdded])
  const fetchMoreData = async () => {
    const response = await labApi.get(`/internPost/getAll/${props.id}/${state.posts.length}`);
    response.status === 200 ? setState({hasMore: response.data.hasMore, posts: state.posts.concat(response.data.rows)}) : console.log('Api error');
  };
  return(
    <div className={'col-sm-12 blog-main'} style={{overflow: 'hidden'}}>
      <h3 className='blog-post-title'>
        Discusión
        {props.isLogged ? <div className='addSol' onClick={() => setShowModal(true)}> + Crear Post</div> : null}
      </h3>
      <ReactModal
        open={showModal}
        onClose={() => setShowModal(false)}
        center
        style={{
          minWidth: '400px'
        }}
      >
        <CreateModal onHide={() => setShowModal(false)}/>
      </ReactModal>

      <InfiniteScroll
        dataLength={state.posts.length}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<div className={'strimload'}></div>}
        endMessage={<div className={'col-md-12'}><p style={{alignSelf: 'center'}}><small>No queda nada que mostrar :c</small></p></div>}
      >
        {state.posts.map((item, index) => {
          return <PostInterno key={index} obj={item}/>
        })}
      </InfiniteScroll>
    </div>
  )
}

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
  isAddSuccess: state.internPost.addPostInternSuccess,
  lastAdded: state.internPost.addPostInternResponse,
  ...state.user
})

const mapDispatchToProps = dispatch => ({
  resetAddInternPost: () => dispatch(resetAddInternPostAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAll);