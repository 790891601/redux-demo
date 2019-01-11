import { connect } from "react-redux"
import { ADD_TODO } from "../actions"
import Header from "../components/Header"

// const mapDispatchToProps = (dispatch) => ({
//   //... key: value ADD_TODO => ADD_TODO
//   ADD_TODO: (text) => dispatch(ADD_TODO(text))
// })

export default connect(null, { addTodo: ADD_TODO })(Header)

/*
  mapDispatchToProps = object || function 
  function: 接受一个对象作为返回值
  object: 自动将对象的key作为props的name，value转成一个函数，返回一个函数，return dispatch(...value)
*/