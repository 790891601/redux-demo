import React from "react"
import { connect } from "react-redux"
import { ActionCreators as UndoableAction } from "redux-undo"

const Undoable = ({ canUndo, canRedo, onUndo, onRedo }) => {
  return <p>
      <button disabled={ !canUndo } onClick={ onUndo }>Un</button>
      <button disabled={ !canRedo } onClick={ onRedo }>Re</button>
  </p>
}

const mapStateToProps = (state) => ({
  canUndo: state.todos.past.length > 0,
  canRedo: state.todos.future.length > 0
})

const mapDispatchToProps = (dispatch) => ({
  onUndo: () => dispatch(UndoableAction.undo()),
  onRedo: () => dispatch(UndoableAction.redo())
})

export default connect(mapStateToProps, mapDispatchToProps)(Undoable)