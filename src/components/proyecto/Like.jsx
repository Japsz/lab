import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {addProyLikeAction, resetAddProyLikeAction} from "../../store/proyecto/actions";

function Like(props){

  const {isSuccess, likeObject, idproyecto, lenlaik, laiked} = props

  const [liked, setLiked] = useState({count: lenlaik, type: laiked})
  const handlerOnClick = (e) => {
    e.preventDefault()
    props.setLike({idproyecto: idproyecto, iduser: 1})
  }
  useEffect(() => {
    if (isSuccess && likeObject.idproyecto === idproyecto) {
      props.resetLike()
      setLiked(likeObject)
    }
  }, [likeObject])
  return (
    <div className={`btn ${liked.type}`} onClick={handlerOnClick}>
      <i className="glyphicon glyphicon-thumbs-up"/> {liked.count}
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  setLike: async payload => dispatch(addProyLikeAction(payload)),
  resetLike: () => dispatch(resetAddProyLikeAction()),
})
const mapStateToProps = state => ({
  isSuccess: state.proys.likeProySuccess,
  isLoading: state.proys.likeProyLoading,
  isErrored: state.proys.likeProyError,
  likeObject: state.proys.likeProyObj,
})

export default connect(mapStateToProps, mapDispatchToProps)(Like);