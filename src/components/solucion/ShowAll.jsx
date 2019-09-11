import React, {useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import labApi from '../../APIs/ldi';
import './ShowAll.css';
import Solucion from './Single';
import {connect} from "react-redux";
import CreateModal from "./createModal";
import ReactModal from "react-responsive-modal";
import {resetAddSolAction} from "../../store/solucion/actions";

class ShowAll extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      sols: [],
      hasMore: true,
      showModal: false
    }
  };

  componentDidUpdate() {
    if (this.props.gotAdded){
      this.setState({...this.state, sols: [], hasMore: false})
      this.props.resetAddSol().then(() => {
        this.fetchMoreData()
      })
    }
  }

  fetchMoreData = async () => {
    const response = await labApi.get(`sol/getAll/${this.props.id}/${this.state.sols.length}`);
    response.status === 200 ? this.setState({ ...this.state, sols: this.state.sols.concat(response.data.rows), hasMore: response.data.hasMore}) : console.log('Api error');
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
        <h3 className={'blog-post-title color-help'}>Últimos Aportes {this.props.isLogged && !this.props.private  ? <div className='addSol' onClick={() => this.setState({...this.state, showModal: true})}>+ Tengo algo que aportar</div> : null}</h3>
        <InfiniteScroll
          dataLength={this.state.sols.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<div className={'strimload'}></div>}
          endMessage={<div className={'col-md-12'}><p style={{alignSelf: 'center'}}><small>No queda nada que mostrar :c</small></p></div>}
        >
        {
        this.state.sols.map((item, index) => {
          return <Solucion key={index} private={this.props.private} obj={item}/>
        })
        }
        </InfiniteScroll>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state.user,
  gotAdded: state.sols.addSolSuccess,
})

const mapDispatchToProps = dispatch => ({
  resetAddSol: async () => dispatch(resetAddSolAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAll);