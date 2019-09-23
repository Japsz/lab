import React from 'react';
import Self from '../../components/proyecto/ShowAll'
const MyProy = () => {
  return (
    <div className='blog-content'>
      <div className="container-fluid">
        <div className="row">
          <Self self={true}/>
        </div>
      </div>
    </div>
  );
};

export default MyProy;