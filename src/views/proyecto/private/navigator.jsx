import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const Navigator = props => {
  const {section, id} = props
  const [buttons, setButtons] = useState([{active: false}, {active: false}, {active: false}])

  useEffect(() => {
    let array = buttons
    switch(section){
      case 'sol':
        array[2].active = true
        break
      case 'avances':
        array[1].active = true
        break
      case 'posts':
        array[0].active = true
        break
      default:
        array[0].active = true
        break
    }
    setButtons(array)
  },[])

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
        Descripicón de la weaita
      </div>
    </div>
  );
};

export default Navigator;