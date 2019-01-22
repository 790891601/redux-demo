import React from "react"
import PropTypes from "prop-types"
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../constants/TodoFilter"
import FilterLink from "../containers/FilterLink"

const FilterLinkNames = {
  [SHOW_ALL]: "All",
  [SHOW_ACTIVE]: "Active",
  [SHOW_COMPLETED]: "Completed"
}

const Footer = ({ count, onClearCompuleted }) => {
  return <footer className="footer">
    <span className="todo-count">
      <strong>{ count }</strong>Items left
    </span>
    <ul className="filters">
      {
        Object.keys(FilterLinkNames).map(filterName => {
          return <li key={ filterName }>
            <FilterLink filter={ filterName }>
              { FilterLinkNames[filterName] }
            </FilterLink>
          </li>
        })
      }
    </ul>
    <button className="clear-completed" onClick={ onClearCompuleted }>
      Clear completed
    </button>
  </footer>
}

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  onClearCompuleted: PropTypes.func.isRequired
}

export default Footer