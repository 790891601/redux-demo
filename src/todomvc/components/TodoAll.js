import React from "react"
import PropTypes from "prop-types"

const TodoAll = ({ hasCount, isAll, onToggleToDoneAll }) => {
  return hasCount ? <section className="todoAll">
    <input id="toggle-all" className="toggle-all" type="checkbox" 
      data-reactid=".0.1.0" 
      checked={ isAll }
      onChange={ onToggleToDoneAll } />
    <label htmlFor="toggle-all" data-reactid=".0.1.1"></label>
  </section> : null
}

TodoAll.propTypes = {
  onToggleToDoneAll: PropTypes.func.isRequired
}

export default TodoAll