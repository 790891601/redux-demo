import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from "./components/App"
import Reducers from "./reducers"
import "todomvc-app-css/index.css"

const store = createStore(Reducers)

// store.subscribe(function() {
//   console.log(store.getState())
// })

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.querySelector("#root")
)