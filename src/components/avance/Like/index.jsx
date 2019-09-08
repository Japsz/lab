import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {
  addAvanceLikeAction, postulateAvanceAction,
  preAproveAvanceAction,
  resetAddAvanceLikeAction, resetPostulateAvanceAction,
  resetPreAproveAvanceAction,
} from "../../../store/avance/actions";

function Like(props){

  const {isSuccess, likeObject, idavance, lenlaik, laiked, integrantes, estado, userInfo, proyInfo} = props

  const [liked, setLiked] = useState({count: lenlaik, type: laiked, estado: estado})
  const handlerOnClick = (e) => {
    e.preventDefault()
    props.setLike({idavance: idavance, iduser: 1})
  }
  const handlePostulate = (e) => {
    e.preventDefault()
    props.postulateAvance({idavance: idavance}).then(() => {
      props.resetPostulate()
      setLiked({...liked, estado: 'pendiente'})
    })
  }

  useEffect(() => {
    if (isSuccess && likeObject.idavance === idavance) {
      props.resetLike()
      if (likeObject.count >= ((integrantes - integrantes % 2) / 2 + 1) && liked.estado !== 'preaprobado'){
        props.preAproveAvance({idavance: likeObject.idavance}).then(res => {
          props.resetPreAprove()
          setLiked({...likeObject, estado: 'preaprobado'})
        })
      } else setLiked({...likeObject, estado: 'propuesto'})
    }
  }, [likeObject])

  if (liked.estado === 'preaprobado') {
    return (<div className={`text-warning text-center`}>¡Pre Aprobado! {parseInt(userInfo.iduser) === parseInt(proyInfo.idcreador) ?
      <div className='addSol' onClick={handlePostulate}>Postular a moderación</div> : null }</div>)
  } else if(liked.estado === 'propuesto'){
    return (
      <div className={`btn ${liked.type}`} onClick={handlerOnClick}>
        <i className="glyphicon glyphicon-thumbs-up"/> {liked.count} / {(integrantes - integrantes % 2) / 2 + 1}
      </div>
    )
  } else if(liked.estado === 'aprobado') {
    return (<div className={`text-success text-center`}>¡Aprobado!</div>)
  } else if(liked.estado === 'rechazado') {
    return (<div className={`text-danger text-center`}>¡Rechazado!</div>)
  } else if(liked.estado === 'pendiente') {
    return (<div className={`text-warning text-center`}>En revisión por el Moderador</div>)
  } else if(liked.estado === 'antiguo') {
    return (<div className={`text-warning text-center`}>Etapa Antigua</div>)
  }

}
const mapDispatchToProps = dispatch => ({
  setLike: async payload => dispatch(addAvanceLikeAction(payload)),
  resetLike: () => dispatch(resetAddAvanceLikeAction()),
  preAproveAvance: async payload => dispatch(preAproveAvanceAction(payload)),
  resetPreAprove: () => dispatch(resetPreAproveAvanceAction()),
  postulateAvance: async payload => dispatch(postulateAvanceAction(payload)),
  resetPostulate: () => dispatch(resetPostulateAvanceAction()),
})
const mapStateToProps = state => ({
  isSuccess: state.avance.likeAvanceSuccess,
  isLoading: state.avance.likeAvanceLoading,
  isErrored: state.avance.likeAvanceError,
  likeObject: state.avance.likeAvanceObj,
  integrantes: state.proys.proy.users.length,
  userInfo: state.user.info,
  proyInfo: state.proys.proy.info,
})

export default connect(mapStateToProps, mapDispatchToProps)(Like);