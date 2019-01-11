import React, { Component } from "react"
import state from "./State"

export default class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return <div>
      
    </div>
  }
}

state.dispatch({ type: "inc", count: 10})
//state.dispatch({ type: "inc", count: 1})
console.log(state.getState())
