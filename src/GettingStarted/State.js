import { createStore, combineReducers } from "redux"

/*
 reducer：归并器,只接收两个参数，一个是之前累积的结果和当前累积的结果
 返回一个新的累计结果，当输入相同，输出的值也会相同，这样的函数才是纯函数
 不接受Math.random()等不纯的参数。
*/
// function counter(state = 0, action) {
//   switch(action.type) {
//     case "inc":
//       return state++
//     case "dec":
//       return state--
//     default:
//       break
//   }
// }

// function appReducer(state = {}, action) {
//   return {
//     counter: counter(state.counter, action)
//   }
// }

function appReducer(state = {}, action) {
  switch(action.type) {
    case "inc":
      return {
        n: state.n + action.count
      }
    case "dec":
      return {
        n: state.n - action.count
      }
    default:
      return {
        n: 0
      }
  }
}


const reducer = combineReducers({ appReducer })
export default createStore(reducer)