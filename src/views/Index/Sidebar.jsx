import React, {useState} from 'react';
import ReactModal from "react-responsive-modal";
import CreateModal from "../../components/proyecto/createModal";
import {connect} from "react-redux";


const Sidebar = props => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="sidebar-module" >
      <ul className="list-group">
        {props.isLogged && parseInt(props.tipo) === 3 ?
          <li className="list-group-item">
            <a href='#' onClick={() => setShowModal(true)}>
              <img src="/assets/img/lab/LAB_mas.png" className='img_40' alt="add"/>
              <img src="/assets/img/lab/LAB_ampolletaidea.png" className='img_40' alt="Idea"/>
              <h4 className='sidebar-text vertical_center'>¡Tengo una idea de proyecto!</h4>
            </a>
          </li>
        : null}
        <li className="list-group-item">
          <a href='#'>
            <img src="/assets/img/lab/LAB_pregunta.png" className='img_40' alt="preg"/>
            <img src="/assets/img/lab/LAB_rompecabeza.png" className='img_40' alt="Idea"/>
            <h4 className='sidebar-text vertical_center'>Quiero saber cómo funciona</h4>
          </a>
        </li>
        <li className="list-group-item">
          <a href='#'>
            <img src="/assets/img/lab/LAB_pregunta.png" className='img_40' alt="preg"/>
            <img src="/assets/img/lab/LAB_mundo.png" className='img_40' alt="Mundo"/>
            <h4 className='sidebar-text vertical_center'>¿Qué son los ODS?</h4>
          </a>
        </li>
      </ul>
      <ReactModal
      open={showModal}
      onClose={() => setShowModal(false)}
      center
      style={{
        minWidth: '400px'
      }}
      >
        <CreateModal onHide={() => setShowModal(false)}/>
      </ReactModal>
    </div>
  );
};

const mapStateToProps = state => ({
  tipo: state.user.info.tipo,
  isLogged: state.user.isLogged
})

export default connect(mapStateToProps,null)(Sidebar);