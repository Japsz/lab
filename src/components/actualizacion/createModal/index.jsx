import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';
import Filedrop from "../../Forms/Filedrop";
import labApi from "../../../APIs/ldi";
import './modal.css'
import {connect} from "react-redux";
import {addActAction} from "../../../store/actualizacion/actions";
import {Redirect} from "react-router";

const Index = (props) => {

  const [formVal, setFormVal] = useState({tipo: props.tipo, contenido: '', principal: '', fileLoad: 0, idproyecto: props.idproyecto, iduser: props.iduser})
  const [file, setFile] = useState(null)

  const [modalStyle, setModalStyle] = useState({placeholder: '', imgSrc: 'LAB_avion.png', title: '', bajada: ''})

  const handlerOnChange = ({target: {name, value}}) => {
    setFormVal({...formVal, [name]: value})
  }
  //Setear estilos y otras partes del modal
  useEffect(() => {
    switch(parseInt(formVal.tipo)){
      case 2:
        setModalStyle({
          placeholder: 'Título de tu post (opcional)',
          imgSrc: '/LAB_escrito.png',
          title: 'Escrito',
          bajada: 'Comparte un escrito que sea de aporte para el proyecto. Este texto lo podrán ver todas las personas que visiten tu proyecto.'
        })
        break
      case 3:
        setModalStyle({
          placeholder: 'Url de la Imagen',
          imgSrc: '/LAB_imagen.png',
          title: 'Imagen',
          bajada: 'Comparte una imagen que sea de aporte para el proyecto. Esta imagen lo podrán ver todas las personas que visiten tu proyecto.'
        })
        break
      case 4:
        setModalStyle({
          placeholder: 'Url del Video',
          imgSrc: '/LAB_Video.png',
          title: 'Video',
          bajada: 'Comparte un escrito que sea de aporte para el proyecto. Este texto lo podrán ver todas las personas que visiten tu proyecto.'
        })
        break
      default:
        break
    }
  }, [formVal.tipo])
  //Manejar submit del fromulario
  const handlerSubmit = async (e) => {
    e.preventDefault()
    //Subir archivo guardado si es que existe
    if (file) {
      const data = new FormData()
      data.append('file', file)
      try{
        const fileUpload = await labApi.post("/upload", data, {
          onUploadProgress: ProgressEvent => {
            console.log(formVal.fileLoad)
            setFormVal({
              ...formVal,
              fileLoad: (ProgressEvent.loaded / ProgressEvent.total * 100)
            })
          }
        })
        props.addProy({...formVal, principal: `/web-img/${fileUpload.data.filename}`})
        props.onHide()
      } catch (e) {
        console.log(e)
        alert('Error al crear la actualización')
      }
    } else {
      props.addProy({...formVal})
      props.onHide()
    }
  }
  if (props.isSuccess) {
    return(<Redirect to={`/proy/${props.idproyecto}/public`}/>)
  }
  return (
    <div className="panel panel-default" style={{width:'100%'}}>
      <div className="panel-body">
        <div className='blog-post-meta'>
          <h2 className={`blog-post-title actModal-title actModal-${modalStyle.title}`} id={'title'}><img src={`/assets/img/lab${modalStyle.imgSrc}`} alt="Crear Actualizacion" className='img_40'/> Crear actualización: {modalStyle.title}</h2>
          <p className="actModal-bajada">{modalStyle.bajada}</p>
        </div>
        <Form onSubmit={handlerSubmit}>
          <div className='blog-post-content'>
            <div className="thumbnail hidden" id='actThumbnail'></div>
            {formVal.tipo === 3 ?
              <div className='form-group' id='actFile'>
                <Filedrop onFilesAddedCb={(file) => setFile(file)} placeholderText={'Sube/Arrastra una foto'}/>
              </div>
              : null }
            <input type='text' name='principal' value={formVal.principal} className='form-control modal-input' onChange={handlerOnChange} placeholder={modalStyle.placeholder} required />
            <div className="form-group" style={{width:'100%'}}>
              <label htmlFor='descripcion' className='modal-input'>Describe el/la {modalStyle.title} que estas compartiendo</label>
              <textarea onChange={handlerOnChange} className='modal-textarea' name='contenido' value={formVal.contenido}></textarea>
            </div>
          </div>
          <div className='blog-post-share'>
            <div className='form-group form-inline pull-right'>
              <input type='text' className='form-control' name='tags' value={formVal.tagToken} placeholder='tags (Ej: tag1, tag2, tag3)' />
              <div className='btn-group'>
                <button type='button' className='btn btn-default' onClick={props.onHide}>Cancelar</button>
                <button type='submit'  className='btn btn-primary' disabled={props.isLoading ? true : false}>+ Crear</button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  ...state.modalHelper,
  idproyecto: state.proys.proy.info.idproyecto,
  iduser: state.user.info.iduser,
  isSuccess: state.acts.addActSuccess,
  isLoading: state.acts.addActLoading,
})
const mapDispatchToProps = dispatch => ({
  addProy: payload => dispatch(addActAction(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Index);