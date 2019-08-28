import React from 'react';
import Like from "./Like";

class Single extends React.Component{
  render () {
    const {username,iconouser, fecha, etapa, contenido, idsolucion, estado, lenlaik, laiked} = this.props.obj;
    const {private: isPrivate} = this.props
    return (
      <section className="blog-post" id={idsolucion}>
        <div className="panel panel-primary">
          <div className="panel-body">
            <div className="blog-post-content">
              <h4 className={'text-center'}>{contenido}</h4>
              <div className="blog-post-share pull-left" style={{marginLeft: '6px', display: 'flex'}}>
                <img src={iconouser} style={{width: '30px', height: '30px', margin: 0, display: 'block'}} className="img-circle img-responsive pull-left"/>
                <h5 style={{marginLeft: '10px'}}>{username}</h5>
              </div>
              {
                isPrivate && (estado !== 1) ?
                  <div className='blog-post-share pull-right'>
                    <Like idsolucion={idsolucion} lenlaik={lenlaik} laiked={laiked !== null ? 'laiked' : 'notlaiked'} estado={estado}/>
                  </div>
                   : null
              }</div>
          </div>
          <div className={'panel-footer'}>
            <p>Etapa: {etapa} | {new Date(fecha).toLocaleString()}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Single;