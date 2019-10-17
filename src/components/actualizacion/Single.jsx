import React from 'react';
import Avance from "../avance/Embed";

class Single extends React.Component{
  render () {
    const {username,iconouser, tipo, fecha, principal, contenido, idactualizacion} = this.props.obj;
    if (tipo < 5) {
      return (
        <section className="blog-post" id={idactualizacion}>
          <div className="panel panel-default">
            {tipo === 3 ? <img src={`/quantumapi${principal}`} alt='Foto de portada' style={{width: 'auto', margin:'auto', display: 'block'}} className={'img-responsive'}/> : null}
            {tipo === 4 ? <div dangerouslySetInnerHTML={{ __html: principal}}></div> : null}
            <div className="panel-body">
              <div className="blog-post-content">
                {tipo === 2 ? <h2 className="blog-post-title">{principal}</h2> : null }
                <p>{contenido}</p>
                <img src={(iconouser && iconouser !== '/assets/img/placeholder.png') ? `/quantumapi${iconouser}` : '/assets/img/placeholder.png'} style={{width: '30px', height: '30px', margin: 0, display: 'block'}} className="img-circle img-responsive pull-left"/>
                <div className="blog-post-share pull-left" style={{marginLeft: '6px', display: 'flex'}}>
                  {username}
                </div>
                <div className="blog-post-date pull-right">
                  <p>{new Date(fecha).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="blog-post" id={idactualizacion}>
          <div className="panel panel-default">
            <div className={`act-hito ${tipo === 6 ? 'act-hito-newUser' : 'act-hito-newEtapa' }`}>
              <div className='panel-body'>
                <h2 className={`${tipo === 6 ? 'act-newUser' : 'act-newEtapa' }`}><img src="/assets/img/lab/LAB_avion.png" alt="newUser" className="img-responsive img_40"/>{tipo === 5 ? ' El proyecto avanzó de etapa' : ' Se ha unido un/a nuevo/a integrante'}</h2>
                {
                  tipo === 5 ?
                    <Avance idhereded={parseInt(contenido)}/>
                  : <>
                      <div className="well">
                        <div className='text-center' style={{margin: '5px'}}>{contenido}</div>
                      </div>
                      <img src={(iconouser && iconouser !== '/assets/img/placeholder.png') ? `/quantumapi${iconouser}` : '/assets/img/placeholder.png'} alt='iconouser' className="img-circle img-responsive img_40"/>
                      <span style={{marginLeft: '6px'}}>
                        {username}
                      </span>
                    </>
                  }
                <div className="blog-post-date pull-right">
                  <p>{new Date(fecha).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

export default Single;