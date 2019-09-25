import React from 'react';
import {Link} from 'react-router-dom';
import Like from "./Like";

class Single extends React.Component{
  render () {
    const {tagz, username, lenlaik, laiked, idproyecto, titulo, descripcion, problema, etapa, creacion, media, evntName, iconouser} = this.props.obj;
    return (
      <section className="blog-post" id={idproyecto}>
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="blog-post-meta">
              <p className="blog-post-date">etapa: {etapa} | {new Date(creacion).toLocaleDateString()}</p>
            </div>
            <div className="blog-post-content">
              <img src={media !== 'no' ? `/quantumapi${media}` : '/assets/img/lab/LAB_imgPlaceholder.png'} alt='Foto de portada' style={{width: 'auto', margin:'auto', display: 'block', paddingBottom: '5%'}} className={'img-responsive'}/>
              <h2 className="blog-post-title">{titulo}</h2>
              <p>{descripcion}</p>
              <img src={iconouser} style={{width: '30px', height: '30px', margin: 0, display: 'block'}} alt={'iconouser'} className="img-circle img-responsive pull-left"/>
              <div className="blog-post-share pull-left" >
                <div className="vertical-center">
                  por {username}
                </div>
              </div>
              <div className="blog-post-share pull-right">
                <Link to={`/proy/${idproyecto}/public`} className="comm btn btn-primary">
                  <i className="glyphicon glyphicon-eye-open"/> Ver
                </Link>
                <Like idproyecto={idproyecto} lenlaik={lenlaik} laiked={laiked ? "laiked" : "notlaiked"}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Single;