import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import labApi from '../../APIs/ldi';
import './ShowAll.css';
import Actualizacion from './Single';
import {resetAddActAction} from "../../store/actualizacion/actions";
import {connect} from "react-redux";

class ShowAll extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      acts: [],
      hasMore: true
    }
  };
  componentDidMount () {
    this.fetchMoreData();
  };
  componentDidUpdate() {
    if (this.props.gotAdded){
      this.setState({...this.state, acts: [], hasMore: false})
      this.props.resetAdd().then(() => {
        this.fetchMoreData()
      })
    }
  }
  fetchMoreData = async () => {
    const response = await labApi.get(`acts/getAll/${this.props.id}/${this.state.acts.length}`);
    response.status === 200 ? this.setState({acts: this.state.acts.concat(response.data.rows), hasMore: response.data.hasMore}) : console.log('Api error');
  };
  render () {
    return(
      <div className={'col-sm-12'}>
        <h3 className={'blog-post-title color-regular'}>Actualizaciones</h3>
        <InfiniteScroll
          dataLength={this.state.acts.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<div className={'strimload'}></div>}
          endMessage={<div className={'col-md-12'}><p style={{alignSelf: 'center'}}><small>No queda nada que mostrar :c</small></p></div>}
        >
          {this.state.acts.map((item, index) => {
            return <Actualizacion key={index} obj={item}/>
          })}
        </InfiniteScroll>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state.user,
  gotAdded: state.acts.addActSuccess,
})

const mapDispatchToProps = dispatch => ({
  resetAdd: async () => dispatch(resetAddActAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowAll);