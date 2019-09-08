import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import Filedrop from "../Forms/Filedrop";
import labApi from "../../APIs/ldi";
import {useAlert} from "react-alert";
import {addProyAction, resetAddProyAction} from "../../store/proyecto/actions";
import {connect} from "react-redux";
import {Redirect} from "react-router";

const CreateModal = props => {
  const [formVal, setFormVal] = useState({titulo:'',idods: 0, descripcion: '', media: '', fileLoad: 0, tags: ''})
  const [file, setFile] = useState(null)
  const handlerOnChange = ({target: {name, value}}) => {
    setFormVal({...formVal, [name]: value})
  }

  const alert = useAlert()

  useEffect(() => {
    if (file) document.getElementById('fileUploadText').innerHTML = file.name
    else document.getElementById('fileUploadText').innerHTML = 'Sube una portada para tu proyecto'
  }, [file])

  const handlerSubmit = async (e) => {
    e.preventDefault()
    if (file) {
      const data = new FormData()
      data.append('file', file)
      try {
        const fileUpload = await labApi.post("/upload", data, {
          onUploadProgress: ProgressEvent => {
            console.log(formVal.fileLoad)
            setFormVal({
              ...formVal,
              fileLoad: (ProgressEvent.loaded / ProgressEvent.total * 100)
            })
          }
        })
        props.addProy({...formVal, media: `/web-img/${fileUpload.data.filename}`, idcreador: props.userInfo.iduser, idobservatorio: props.userInfo.obs[0].idobservatorio})
      } catch (e) {
        console.log(e)
        alert.error('Error al crear la actualización')
      }
    } else {
      const response = await props.addProy({...formVal, media:'no', idcreador: props.userInfo.iduser, idobservatorio: props.userInfo.obs[0].idobservatorio})
      console.log(response);
    }
  }
  if (props.isErrored) {
    alert.error('Error al crear el proyecto')
  }
  if (props.isSuccess) {
    props.resetAddProy()
    return(<Redirect to={`/proy/${props.idRedirect}`}/>)
  }
  return (
    <div className="panel panel-default" style={{width:'100%'}}>
      <div className="panel-body">
        <div className='blog-post-meta'>
          <h2 className='blog-post-title' id={'title'}><img src="/assets/img/lab/LAB_ampolletaidea.png" alt="Crear" className='img_40'/> Crear un Proyecto</h2>
        </div>
        <Form onSubmit={handlerSubmit}>
          <div className='blog-post-content'>
            <div className='form-group'>
              <Filedrop onFilesAddedCb={(file) => setFile(file)}/>
            </div>
            <input type='text' name='titulo' value={formVal.titulo} className='form-control modal-input' onChange={handlerOnChange} placeholder='Título del proyecto' required />
            <div className="form-group">
              <select className='form-control modal-input' name='idods' onChange={handlerOnChange} value={formVal.idods}>
                <option value='0' disabled defaultChecked={true}>Selecciona un Objetivo de Desarrollo Sostenible</option>
                <option value='1'>Fin de la Pobreza</option>
                <option value='2'>Acción por el Clima</option>
                <option value='3'>Agua limpia y saneamiento</option>
                <option value='4'>Alianzas para lograr Objetivos</option>
                <option value='5'>Ciudades y comunidades Sostenibles</option>
                <option value='6'>Educación de Calidad</option>
                <option value='7'>Energía asequible y no contaminante</option>
                <option value='8'>Hambre Cero</option>
                <option value='9'>Igualdad de Género</option>
                <option value='10'>Industria Innovación e infraestructura</option>
                <option value='11'>Paz justicia e Instituciones solidas</option>
                <option value='12'>Producción y consumo responsable</option>
                <option value='13'>Reducción de Desigualdades</option>
                <option value='14'>Salud y Bienestar</option>
                <option value='15'>Trabajo Decente y crecimiento económico</option>
                <option value='16'>Vida de Ecosistemas terrestres</option>
                <option value='17'>Vida submarina</option>
              </select>
            </div>
            <div className="form-group" style={{width:'100%'}}>
              <label htmlFor='descripcion' className='modal-input'>Descripción</label>
              <textarea onChange={handlerOnChange} className='modal-textarea' name='descripcion' value={formVal.descripcion}></textarea>
            </div>
          </div>
          <div className='blog-post-share'>
            <div className='form-group form-inline pull-right'>
              <input type='text' className='form-control' name='tags' value={formVal.tags} onChange={handlerOnChange} placeholder='tags (Ej: tag1, tag2, tag3)' />
              <div className='btn-group'>
                <button type='button' className='btn btn-default' onClick={props.onHide}>Cancelar</button>
                <button type='submit'  className='btn btn-primary' disabled={props.isLoading ? true : false}>+ Proyecto</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addProy: payload => dispatch(addProyAction(payload)),
  resetAddProy: payload => dispatch(resetAddProyAction(payload)),
})

const mapStateToProps = state => ({
  userInfo: state.user.info,
  isSuccess: state.proys.addProySuccess,
  isLoading: state.proys.addProyLoading,
  isErrored: state.proys.addProyError,
  idRedirect: state.proys.idProyRedirect,
})

export default connect(mapStateToProps,mapDispatchToProps)(CreateModal);