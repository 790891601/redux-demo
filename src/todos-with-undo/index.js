import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import App from "./components/App"
import reducers from "./reducers"

const store = createStore(reducers)

store.subscribe(function() {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)