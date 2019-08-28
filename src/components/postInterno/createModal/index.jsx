import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import './modal.css'
import {connect} from "react-redux";
import {addInternPostAction, resetAddInternPostAction} from "../../../store/postInterno/actions";
import {useAlert} from "react-alert";

const Index = (props) => {

  const [formVal, setFormVal] = useState({texto1: '', tipo: 1, idproyecto: props.idproyecto, iduser: props.iduser})

  const handlerOnChange = ({target: {name, value}}) => {
    setFormVal({...formVal, [name]: value})
  }
  //Manejar submit del fromulario
  const handlerSubmit = async (e) => {
    e.preventDefault()
    props.addInternPost({...formVal})
  }
  const alert = useAlert()
  const {isSuccess, onHide, isErrored} = props

  useEffect(() => {
    if (isSuccess) onHide()
    if (isErrored) {
      alert.error('Error de la API')
      onHide()
      props.resetAddInternPost()
    }
  }, [isSuccess, isErrored])

  return (
    <div className="panel panel-default" style={{width:'100%'}}>
      <div className="panel-body">
        <div className='blog-post-meta'>
          <h2 className={`blog-post-title`} id={'title'}><img src={`/assets/img/lab/LAB_muroInterno.png`} alt="Crear Actualizacion" className='img_40 img-responsive'/> Crear Aporte:</h2>
        </div>
        <Form onSubmit={handlerSubmit}>
          <div className='blog-post-content'>
            <p className="actModal-bajada">Postea cualquier texto para iniciar la discusión entre los integrantes:</p>
            <div className="form-group" style={{width:'100%'}}>
              <textarea onChange={handlerOnChange} className='modal-textarea' name='texto1' value={formVal.texto1}/>
            </div>
          </div>
          <div className='blog-post-share'>
            <div className='form-group form-inline pull-right'>
              <div className='btn-group'>
                <button type='button' className='btn btn-default' onClick={props.onHide}>Cancelar</button>
                <button type='submit'  className='btn btn-primary' disabled={props.isLoading ? true : false}>+ Aportar</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  ...state.proys.proy.info,
  iduser: state.user.info.iduser,
  isErrored: state.internPost.addPostInternError,
  isSuccess: state.internPost.addPostInternSuccess,
  isLoading: state.internPost.addPostInternLoading,
})
const mapDispatchToProps = dispatch => ({
  addInternPost: payload => dispatch(addInternPostAction(payload)),
  resetAddInternPost: () => dispatch(resetAddInternPostAction()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Index);