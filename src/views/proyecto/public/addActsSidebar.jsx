import React, {useState} from 'react';
import {connect} from "react-redux";

import './addActsSidebar.css'
import ReactModal from "react-responsive-modal";
import Modal from "../../../components/actualizacion/createModal";
import {setTipo} from '../../../store/modalHelper/action'
const AddActsSidebar = (props) => {

  const [addModal, setAddModal] = useState({show: false})

  const showModal = (value) => {
    props.setModal(value)
    setAddModal({show: true})
  }

  return (
    <section className='blog-post' style={{marginTop: '50%'}}>
      <div className="panel panel-default">
        <div className="panel-body actSidebar">
          <h3 className='actSidebar-title'>Publica una actualización</h3>
          <div className="actSidebar-item" onClick={() => showModal(2)}>
            <div className="d-block">
              <img src="/assets/img/lab/LAB_escrito.png" alt="actEscrito" className='actSidebar-icon'/>
            </div>
            <div className='d-block text-center'>
              Escrito
            </div>
          </div>
          <div className="actSidebar-item" onClick={() => showModal(3)}>
            <div className="d-block">
              <img src="/assets/img/lab/LAB_imagen.png" alt="actEscrito" className='actSidebar-icon'/>
            </div>
            <div className='d-block text-center'>
              Imagen
            </div>
          </div>
          <div className="actSidebar-item" onClick={() => showModal(4)}>
            <div className="d-block">
              <img src="/assets/img/lab/LAB_video.png" alt="actEscrito" className='actSidebar-icon'/>
            </div>
            <div className='d-block text-center'>
              Video
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        open={addModal.show}
        onClose={() => setAddModal({...addModal, show: false})}
        center
        style={{
          minWidth: '400px'
        }}
      >
        <Modal onHide={() => setAddModal({...addModal, show: false})}/>
      </ReactModal>
    </section>
  );
};
const mapDispatchToProps = dispatch => ({
  setModal: payload => dispatch(setTipo(payload))
})
export default connect(null,mapDispatchToProps)(AddActsSidebar);