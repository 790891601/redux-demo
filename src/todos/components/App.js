import React, { Component } from "react"
import AddTodo from "../containers/AddTodo"
import VisibleTodos from "../containers/VisibleTodos"
import Footer from "./Footer"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return <div id="app">
      <AddTodo />
      <VisibleTodos />
      <Footer />
    </div>
  }
}