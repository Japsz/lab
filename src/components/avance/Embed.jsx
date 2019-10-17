import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {getAvanceByIdAction} from "../../store/avance/actions";

const Embed = (props) => {
  const {ansToken, idhereded, getAvance, userToken} = props
  useEffect(() => {
    getAvance(idhereded)
  }, [])
  return (
    <div className="blog-post-content">
      {
        ansToken.map((item, idx) => {
          return(<div className='well' key={idx}>
            <h4 className='blog-post-title'>{item[0]}</h4>
            {
              parseInt(item[1]) ?
                <p className='text-success'>Completado</p>
                : <p className="text-center">{item[2]}</p>
            }
          </div>)
        })
      }
      <div className="blog-post-share pull-left" style={{marginLeft: '6px', display: 'flex'}}>
        <img src={(userToken[1] && userToken[1] !== '/assets/img/placeholder.png') ? `/quantumapi${userToken[1]}` : '/assets/img/placeholder.png'} style={{width: '30px', height: '30px', margin: 0, display: 'block'}} className="img-circle img-responsive pull-left"/>
        <h5 style={{marginLeft: '10px'}}>{userToken[0]}</h5>
      </div>
    </div>

  );
};
const mapStateToProps = state => ({
  ...state.avance.getAvanceResponse,
})
const mapDispatchToProps = dispatch => ({
  getAvance: payload => dispatch(getAvanceByIdAction(payload)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Embed);