import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {state1: 0}
    this.startTimer = this.startTimer.bind(this)
    this.startTimer()
  }
  startTimer = () => {
    setInterval(() => {this.setState({state1: this.state.state1 + 1})}, 100)
  }
  render() {
    return <button onClick={()=> alert("this function will be called... sometimes")}>
      test: {this.state.state1}
    </button>
  }
}
export default App;