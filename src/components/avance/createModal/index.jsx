import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import './modal.css'
import {connect} from "react-redux";
import Filedrop from "../../Forms/Filedrop";
import {addAvanceAction} from "../../../store/avance/actions";
import labApi from "../../../APIs/ldi";

const Index = (props) => {

  const [formVal, setFormVal] = useState({idproyecto: props.idproyecto, iduser: props.iduser, answers: Array(props.enuns.length).fill('')})
  const [fileLoad, setFileLoad] = useState(0)
  const handlerOnChange = ({target: {value, id}}) => {
    let arrayAux = formVal.answers
    arrayAux[id] = value
    setFormVal({...formVal, answers: arrayAux})
  }
  const setFile = (file, idx) => {
    let arrayAux = formVal.answers
    arrayAux[idx] = file
    setFormVal({...formVal, answers: arrayAux})
  }

  //Manejar submit del fromulario
  const handlerSubmit = async (e) => {
    e.preventDefault()
    const uploadFile = async (file) => {
      const data = new FormData()
      data.append('file', file)
      const fileUpload = await labApi.post("/upload", data, {
        onUploadProgress: ProgressEvent => {
          console.log((ProgressEvent.loaded / ProgressEvent.total * 100))
        }
      })
      return fileUpload.data.filename
    }
    let ansArray = []
    for(let idx = 0; idx < formVal.answers.length; idx++) {
      if (enuns[idx].archivo) {
        let updPath = await uploadFile(formVal.answers[idx])
          ansArray.push([enuns[idx].idenunciado, updPath])
      } else {
        ansArray.push([enuns[idx].idenunciado, formVal.answers[idx]])
      }
    }
    props.addAvance({...formVal, answers: ansArray})
    props.onHide()
  }
  const {enuns} = props
  return (
    <div className="panel panel-default" style={{width:'100%'}}>
      <div className="panel-body">
        <div className='blog-post-meta'>
          <h2 className={`blog-post-title`} id={'title'}><img src={`/assets/img/lab/LAB_muroInterno.png`} alt="Crear Avance" className='img_40 img-responsive'/> Crear Avance:</h2>
        </div>
        <Form onSubmit={handlerSubmit}>
          <div className='blog-post-content'>
            <p className="actModal-bajada">Contesta las siguientes preguntas:</p>
            {
              enuns.map((item, idx) => {
                return(
                  <div className="form-group" style={{width:'100%'}} key={idx}>
                    <div className="enunciado">{item.enunciado}</div>
                    {
                      item.archivo ?
                        <Filedrop onFilesAddedCb={(file) => setFile(file, idx)} placeholderText={'Sube un Archivo'}/>
                        : <textarea onChange={handlerOnChange} className='modal-textarea' name={`answer`} id={idx} value={formVal.answers[idx]} required></textarea>
                    }
                  </div>
                )
              })
            }
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
  isSuccess: state.avance.addAvanceSuccess,
  isErrored: state.avance.addAvanceError,
  isLoading: state.avance.addAvanceLoading,
})
const mapDispatchToProps = dispatch => ({
  addAvance: async payload => dispatch(addAvanceAction(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Index);