import React from 'react';
import Like from "./Like";

class Single extends React.Component{
  render () {
    const {userToken, fecha, ansToken, idavance, estado, lenlaik, laiked} = this.props.obj;
    return (
      <section className="blog-post" id={idavance}>
        <div className="panel panel-primary">
          <div className={`act-hito act-hito-newEtapa`}>
            <div className="panel-body">
              <div className="blog-post-content">
                {
                  ansToken.map((item, idx) => {
                    return(<div className='well' key={idx}>
                      <h4 className='blog-post-title'>{item[0]}</h4>
                      {
                        parseInt(item[1]) ?
                          <a href={`/quantumapi/web-img/${item[2]}`} className='addSol' target='_blank' download={`archivoAvance${idavance}`} >Descargar Archivo</a>
                          : <p className="text-center">{item[2]}</p>
                      }
                    </div>)
                  })
                }
                <div className="blog-post-share pull-left" style={{marginLeft: '6px', display: 'flex'}}>
                  <img src={userToken[1]} style={{width: '30px', height: '30px', margin: 0, display: 'block'}} className="img-circle img-responsive pull-left"/>
                  <h5 style={{marginLeft: '10px'}}>{userToken[0]}</h5>
                </div>
                <div className='blog-post-share pull-right'>
                  <Like idavance={idavance} lenlaik={lenlaik} laiked={laiked !== null ? 'laiked' : 'notlaiked'} estado={estado}/>
                </div>
              </div>
            </div>
          </div>
          <div className={'panel-footer'}>
            <p>{new Date(fecha).toLocaleString()}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Single;