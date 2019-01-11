import React from "react"
import { connect } from "react-redux"
import { addTodoAction } from "../actions"

const AddTodo = ({ id, dispatch }) => {
  let input 
  
  return <div className="addtodo">
    <form onSubmit={e => {
      e.preventDefault()

      if(input.value.trim() === "") {
        return 
      }
      dispatch(addTodoAction(id, input.value))
      input.value = ""
    }}>
      <input type="text" ref={value => input = value} />
      <button type="submit">ADD TODO</button>
    </form>
  </div>
}

const mapStateToProps = state => {
  return {
    id: state.todos.present.length
  }
}

export default connect(mapStateToProps)(AddTodo)