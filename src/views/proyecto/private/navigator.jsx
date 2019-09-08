import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Navigator = props => {
  const {section, id} = props
  const [buttons, setButtons] = useState([{active: false}, {active: false}, {active: false}])
  const [currentText, setText] = useState('')

  useEffect(() => {
    let array = buttons
    switch(section){
      case 'sol':
        array[2].active = true
        setText('Todas los aportes hechos a tu proyecto son postulaciones para unirse! Vota por las soluciones que creas que merecen participar del equipo y cuando tengan suficientes votos se añadirá al creador(a) del aporte al proyecto.')
        break
      case 'avances':
        array[1].active = true
        setText('Aquí podrás ver y crear propuestas de Avance para lograr que tu proyecto pase a la siguiente etapa. Vota por los avance que creas correctos y cuando este junte suficientes votos se preaprobará. Será deber luego del CREADOR del proyecto el cuál podrá postular un avance preaprobado para que sea revisado por Moderación el cuál lo aprobará o rechazarpa segun el caso.' +
          'OJO: cuando un avance sea aprobado por el moderador, se cerrarán las votaciones de los demás avances propuestos en la misma etapa.')
        break
      case 'posts':
        array[0].active = true
        setText('Aquí podrás postear cualquier texto o tema que quieras discutir con tu equipo. Aquí pueden decidir que integrante añadir o sobre que postear en su muro publico. Una buena comunicación puede generar grandes ideas!')
        break
      default:
        array[0].active = true
        break
    }
    setButtons(array)
  },[section])

  const handleClick = (e) => {
    let array = buttons.map((item) => ({active: false}))
    array[e.currentTarget.value].active = true
    setButtons(array)
  }

  return (
    <div className="col-md-12">
      <ul className="nav nav-tabs nav-tabs-justified">
        <li role="presentation" className={buttons[0].active ? 'active' : ''} value={0} onClick={handleClick}>
          <Link to={`/intern/${id}/posts`}>
            <span>Discusión</span>
          </Link>
        </li>
        <li role="presentation" className={buttons[1].active ? 'active' : ''} value={1} onClick={handleClick}><Link to={`/intern/${id}/avances`}><span>Avances</span></Link></li>
        <li role="presentation" className={buttons[2].active ? 'active' : ''} value={2} onClick={handleClick}><Link to={`/intern/${id}/sol`}><span>Añadir Integrantes</span></Link></li>
      </ul>
      <div className='well'>
        {currentText}
      </div>
    </div>
  );
};

export default Navigator;