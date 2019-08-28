import React, {useState} from 'react';
import ShowAll from "./comment/ShowAll";
import {Collapse} from "react-collapse";

const Single = (props) => {
  const {username,iconouser, fecha, texto1, idpostinterno} = props.obj;
  const [showComments, setShowComments] = useState(false)
  return (
    <section className="blog-post" id={idpostinterno}>
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="blog-post-content">
            <h4 className={'text-center'}>{texto1}</h4>
            <img src={iconouser} style={{width: '30px', height: '30px', margin: 0, display: 'block'}} className="img-circle img-responsive pull-left"/>
            <div className="blog-post-share pull-left" style={{marginLeft: '6px', display: 'flex'}}>
              <h5 style={{marginLeft: '10px'}}>{username}</h5>
            </div>
            <div className="blog-post-date pull-right" onClick={() => setShowComments(!showComments)}>
              <p>{new Date(fecha).toLocaleString()}</p>
            </div>
          </div>
        </div>
        <Collapse isOpened={showComments}>
          <div className={`panel-footer`}>
            <ShowAll id={idpostinterno}/>
          </div>
        </Collapse>
      </div>
    </section>
  );
}

export default Single;