import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {
  addAvanceLikeAction,
  preAproveAvanceAction,
  resetAddAvanceLikeAction,
  resetPreAproveAvanceAction,
} from "../../../store/avance/actions";

function Like(props){

  const {isSuccess, likeObject, idavance, lenlaik, laiked, integrantes, estado} = props

  const [liked, setLiked] = useState({count: lenlaik, type: laiked, estado: estado})
  const handlerOnClick = (e) => {
    e.preventDefault()
    props.setLike({idavance: idavance, iduser: 1})
  }
  const handlePostulate = (e) => {
    e.preventDefault()

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
    return (<div className={`text-warning text-center`}>¡Pre Aprovado!</div>)
  } else if(liked.estado === 'propuesto'){
    return (
      <div className={`btn ${liked.type}`} onClick={handlerOnClick}>
        <i className="glyphicon glyphicon-thumbs-up"/> {liked.count} / {(integrantes - integrantes % 2) / 2 + 1}
      </div>
    )
  } else if(liked.estado === 'aprobado') {
    return (<div className={`text-success text-center`}>¡Aprovado!</div>)
  } else if(liked.estado === 'rechazado') {
    return (<div className={`text-danger text-center`}>¡Rechazado!</div>)
  } else if(liked.estado === 'pendiente') {
    return (<div className={`text-warning text-center`}>En revisión</div>)
  }
}
const mapDispatchToProps = dispatch => ({
  setLike: async payload => dispatch(addAvanceLikeAction(payload)),
  resetLike: () => dispatch(resetAddAvanceLikeAction()),
  preAproveAvance: payload => dispatch(preAproveAvanceAction(payload)),
  resetPreAprove: () => dispatch(resetPreAproveAvanceAction()),
})
const mapStateToProps = state => ({
  isSuccess: state.avance.likeAvanceSuccess,
  isLoading: state.avance.likeAvanceLoading,
  isErrored: state.avance.likeAvanceError,
  likeObject: state.avance.likeAvanceObj,
  integrantes: state.proys.proy.users.length,
})

export default connect(mapStateToProps, mapDispatchToProps)(Like);