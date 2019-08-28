import React, {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import labApi from '../../APIs/ldi';
import './ShowAll.css';
import Avance from './Single';
import {connect} from "react-redux";
import CreateModal from "./createModal";
import ReactModal from "react-responsive-modal";
import {resetAddAvanceAction} from "../../store/avance/actions";

class ShowAll extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      avances: [],
      hasMore: true,
      showModal: false
    }
  };

  componentDidMount () {
    this.fetchMoreData();
  };
  componentDidUpdate() {
    if (this.props.gotAdded){
      this.setState({...this.state, avances: [], hasMore: false})
      this.props.resetAddAvance().then(() => {
        this.fetchMoreData()
      })
    }
  }

  fetchMoreData = async () => {
    const response = await labApi.get(`/avance/getAll/${this.props.id}/${this.state.avances.length}`);
    response.status === 200 ? this.setState({ ...this.state, avances: this.state.avances.concat(response.data.rows), hasMore: response.data.hasMore}) : console.log('Api error');
  };

  render () {
    return(
      <div className={'col-sm-12'}>
        <ReactModal
          open={this.state.showModal}
          onClose={() => this.setState({...this.state, showModal: false})}
          center
          style={{
            minWidth: '400px'
          }}
        >
          <CreateModal onHide={() => this.setState({...this.state, showModal: false})}/>
        </ReactModal>
        <h3 className={'blog-post-title color-help'}>
          Últimos Avances
          <div className='addSol' onClick={() => this.setState({...this.state, showModal: true})}>+ Crear un avance</div>
        </h3>
        <InfiniteScroll
          dataLength={this.state.avances.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<div className={'strimload'}></div>}
          endMessage={<div className={'col-md-12'}><p style={{alignSelf: 'center'}}><small>No queda nada que mostrar :c</small></p></div>}
        >
        {
        this.state.avances.map((item, index) => {
          return <Avance key={index} obj={item}/>
        })
        }
        </InfiniteScroll>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state.user,
  gotAdded: state.avance.addAvanceSuccess,
})

const mapDispatchToProps = dispatch => ({
  resetAddAvance: async () => dispatch(resetAddAvanceAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAll);