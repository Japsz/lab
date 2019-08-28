import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import './modal.css'
import {connect} from "react-redux";
import {addSolAction} from "../../../store/solucion/actions";

const Index = (props) => {

  const [formVal, setFormVal] = useState({contenido: '', idproyecto: props.idproyecto, etapa: props.etapa, iduser: props.iduser})

  const handlerOnChange = ({target: {name, value}}) => {
    setFormVal({...formVal, [name]: value})
  }
  //Manejar submit del fromulario
  const handlerSubmit = async (e) => {
    e.preventDefault()
    //Subir archivo guardado si es que existe
    props.addSol({...formVal})
    props.onHide()
  }
  const {enuns} = props
  return (
    <div className="panel panel-default" style={{width:'100%'}}>
      <div className="panel-body">
        <div className='blog-post-meta'>
          <h2 className={`blog-post-title`} id={'title'}><img src={`/assets/img/lab/LAB_muroInterno.png`} alt="Crear Actualizacion" className='img_40 img-responsive'/> Crear Aporte:</h2>
        </div>
        <Form onSubmit={handlerSubmit}>
          <div className='blog-post-content'>
            <p className="actModal-bajada">Ahora el proyecto debe responder a:</p>
            <ul>
              {
                enuns.map((item, idx) => <li key={idx} className='enunciado'>{item.enunciado}</li>)
              }
            </ul>
            <p>Contribuye con alguna idea, solución o conocimiento que creas pueda ser útil para el proyecto.</p>
            <p>Si eres seleccionado por los integrantes, podrás participar del mismo.</p>
            <div className="form-group" style={{width:'100%'}}>
              <textarea onChange={handlerOnChange} className='modal-textarea' name='contenido' value={formVal.contenido}></textarea>
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
  enuns: state.proys.proy.etapas.enuns,
  isSuccess: state.sols.addSolSuccess,
  isErrored: state.sols.addSolError,
  isLoading: state.sols.addSolLoading,
})
const mapDispatchToProps = dispatch => ({
  addSol: async payload => dispatch(addSolAction(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Index);