import React from 'react';
import AllProys from '../../components/proyecto/ShowAll';
import Sidebar from "./Sidebar";

import {Image} from "react-bootstrap";

class Index extends React.Component{

  render () {
    return(
      <div className={'container blog-content'}>
        <div className="row" >
          <div className="col-md-12">
            <h2 className='page-header pull-left'>Bienvenido/a!</h2>
          </div>
          <div className="col-md-8 col-sm-12">
            <Image src={'/assets/img/unsplash-1.png'} style={{width: '100%'}}/>
          </div>
          <div className="col-md-4 col-sm-12">
            <Sidebar/>
          </div>
        </div>
        <div className={'row'}>
          <AllProys/>
        </div>
      </div>
    )
  }
}

export default Index;