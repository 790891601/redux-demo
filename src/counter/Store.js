import { createStore } from "redux"
import counterList from "./reducer/counterList"

export default createStore(counterList)