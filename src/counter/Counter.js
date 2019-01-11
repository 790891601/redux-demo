import React, { Component } from "react"

export default class Counter extends Component { 
  render() {
    const { n, inc, dec } = this.props
    return <div>
      <button onClick={ inc }>+1</button>
      <button onClick={ dec }>-1</button>
      { n }
    </div>
  }
}