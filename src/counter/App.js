import React, { Component } from "react"
import store from "./Store"
import Counter from "./Counter"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: store.getState()
    }
  }

  changeCounter(type, index= 0) {
    store.dispatch({
      type,
      index
    })
    this.emitChange()
  }
  
  emitChange() {
    this.setState({
      list: store.getState()
    })
  }
  render() {
    const listCounter = this.state.list.map(
      (item, index) => <Counter n={ item.n } 
        inc={ this.changeCounter.bind(this, "INC_TO_LIST", index) } 
        dec={ this.changeCounter.bind(this, "DEC_TO_LIST", index) } />
    )

    return <div>
      { listCounter }
      <button
        onClick={ this.changeCounter.bind(this, "ADD_TO_LIST") }>addCounter</button>   &nbsp;&nbsp;
      <button
        onClick={ this.changeCounter.bind(this, "DEL_TO_LIST") }>removeCounter</button>
    </div>
  }
}