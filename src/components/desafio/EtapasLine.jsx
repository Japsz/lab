import React from 'react';
import {connect} from "react-redux";


const EtapasLine = props => {
  const {etapas: {names: etapas}, actual} = props
  const anchoEtapa = 100 / (etapas.length + 1)
  return (
    <div className='steps' style={{marginBottom: '20px'}}>
      <ul className='steps-container'>
        {
          etapas.map((item, index) => {
            return (
              <li style={{width: `${anchoEtapa}%`}} className={(index + 1 <= actual) ? 'activated' : null} key={index}>
                <div className='step'>
                  <div className='step-image'><span></span></div>
                  <div className='step-current'>Etapa {index + 1}</div>
                  <div className='step-description'>{item}</div>
                </div>
              </li>
            )
          })
        }
        <li style={{width: `${anchoEtapa}%`}} className={(actual > etapas.length) ? 'activated' : null}>
          <div className='step'>
            <div className='step-image'><span></span></div>
            <div className='step-current'>Etapa {etapas.length + 1}</div>
            <div className='step-description'>Fin!</div>
          </div>
        </li>
      </ul>
      <div className='step-bar' style={{width: `${anchoEtapa * actual}%`}}/>
    </div>
  );
}

const mapStateToProps = state => ({
  etapas: state.proys.proy.etapas,
  actual: state.proys.proy.info.etapa
})

export default connect(mapStateToProps,null)(EtapasLine);