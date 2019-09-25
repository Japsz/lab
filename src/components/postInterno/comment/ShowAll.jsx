import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import labApi from "../../../APIs/ldi";
import {useAlert} from "react-alert";
import {addCommentInternoAction, resetAddCommentInternoAction} from "../../../store/commentInterno/actions";


const ShowAll = (props) => {
  const {isSuccess, newComment, id} = props
  const [formVal, setFormVal] = useState({texto: '', idpost: id, iduser: props.userInfo.iduser})
  const [comments, setComments] = useState({list: [], hasMore: true})
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addComment(formVal)
  }
  const alert = useAlert()

  const fetchMore = async () => {
    try{
      const response = await labApi.get(`internComment/getAll/${props.id}/${comments.list.length}`,{headers: {authorization: localStorage.getItem('session-token')}})
      setComments({list: comments.list.concat(response.data.rows), hasMore: response.data.hasMore})
    } catch(e){
      console.log(e)
      alert.error('Hubo problemas al enviar tu comentario')
    }
  }

  useEffect(() => {
    fetchMore()
  }, [])

  useEffect(() => {
    if(isSuccess && newComment.idpostinterno === id) {
      let array = comments.list
      array.unshift({...formVal, fecha: new Date().toISOString(), avatar_pat: props.userInfo.avatar_pat})
      props.resetAdd()
      setComments({...comments, list: array})
      setFormVal({texto: '', idpost: id, iduser: props.userInfo.iduser})
    }
  }, [isSuccess])
  return (
    <>
      <h2 className='comment-title'>Comentarios</h2>
      <div className='well'>
        <form onSubmit={handleSubmit}>
          <div style={{width: '10%', display: 'inline-block'}}>
            <img className="img-responsive img-circle pull-left img_40" src={props.userInfo.avatar_pat} alt={'Foto de perfil'}/>
          </div>
          <div style={{width: '80%', display: 'inline-block'}}>
            <textarea name="texto" id="commtxt" className='form-control' value={formVal.texto} onChange={(e) => setFormVal({...formVal, texto: e.target.value})} required/>
          </div>
          <div style={{width: '10%', display: 'inline-block'}}>
            <button className='btn btn-primary' type='submit'>Enviar</button>
          </div>
        </form>
      </div>
      {
        comments.list.map((item, index) =>
          <div className="well comment-space" key={index}>
            <div style={{width: '20%', display: 'inline-block'}}>
              <img className="img-responsive img-circle pull-left img_40" src={`/quantumapi${item.avatar_pat}`}/>
            </div>
            <div style={{width: '70%', display: 'inline-flex', textAlign: 'center', height:'auto', alignContent: 'center'}}>
              {item.texto}
            </div>
            <div style={{width: '10%', display: 'inline-block'}}>
              <p>{new Date(item.fecha).toLocaleString()}</p>
            </div>
          </div>
        )
      }
      { comments.list.length === 0 ? <div>No hay Comentarios para mostrar</div> : null}
      {
        comments.hasMore ?
          <div className='addSol' onClick={fetchMore}>
            Ver mas comentarios
          </div> : null
      }
    </>
  )
}

const mapStateToProps = state => ({
  userInfo: state.user.info,
  isSuccess: state.internComment.addCommentInternSuccess,
  newComment: state.internComment.addCommentInternResponse
})

const mapDisptchToProps = dispatch => ({
  addComment: payload => dispatch(addCommentInternoAction(payload)),
  resetAdd: () => dispatch(resetAddCommentInternoAction())
})
export default connect(mapStateToProps, mapDisptchToProps)(ShowAll);