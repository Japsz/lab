import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {
  addSolLikeAction,
  addSolUserAction,
  resetAddSolLikeAction,
  resetAddSolUserAction
} from "../../../store/solucion/actions";

function Like(props){

  const {isSuccess, likeObject, idsolucion, lenlaik, laiked, integrantes, estado} = props

  const [liked, setLiked] = useState({count: lenlaik, type: laiked, estado: estado})
  const handlerOnClick = (e) => {
    e.preventDefault()
    props.setLike({idsolucion: idsolucion, iduser: 1})
  }
  useEffect(() => {
    if (likeObject.count >= ((integrantes - integrantes % 2) / 2 + 1)) setLiked({...likeObject, estado: 1})
  }, [])
  useEffect(() => {
    if (isSuccess && likeObject.idsolucion === idsolucion) {
      props.resetLike()
      if (likeObject.count >= ((integrantes - integrantes % 2) / 2 + 1)){
        props.addSolUser({idsolucion: likeObject.idsolucion})
        setLiked({...likeObject, estado: 1})
      } else setLiked({...likeObject, estado: 0})
    }
  }, [likeObject])
  if (liked.estado > 0) {
    return (<div className={`text-success ${liked.type}`}>¡Aceptado!</div>)
  } else
  return (
    <div className={`btn ${liked.type}`} onClick={handlerOnClick}>
      <i className="glyphicon glyphicon-thumbs-up"/> {liked.count} / {(integrantes - integrantes % 2) / 2 + 1}
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  setLike: async payload => dispatch(addSolLikeAction(payload)),
  resetLike: () => dispatch(resetAddSolLikeAction()),
  addSolUser: payload => dispatch(addSolUserAction(payload)),
  resetAddUser: () => dispatch(resetAddSolUserAction()),
})
const mapStateToProps = state => ({
  isSuccess: state.sols.likeSolSuccess,
  isLoading: state.sols.likeSolLoading,
  isErrored: state.sols.likeSolError,
  likeObject: state.sols.likeSolObj,
  integrantes: state.proys.proy.users.length,
})

export default connect(mapStateToProps, mapDispatchToProps)(Like);