import React from "react"
import PropTypes from "prop-types"
import VisibleFilter from "../containers/VisibleFilter"
import TodoAll from "./TodoAll"
import Footer from "./Footer"

const MainSection = ({ count, hasCount, isAll, onToggleToDoneAll, onClearCompuleted }) => {
  return  <section className="main" >
    <TodoAll count={ count } hasCount={ hasCount } isAll={ isAll } onToggleToDoneAll={ onToggleToDoneAll } />
    <VisibleFilter />
    <Footer count={ count } onClearCompuleted={ onClearCompuleted } />
  </section>
}

MainSection.propTypes = {
  count: PropTypes.number.isRequired,
  hasCount: PropTypes.number.isRequired,
  onToggleToDoneAll: PropTypes.func.isRequired,
  onClearCompuleted: PropTypes.func.isRequired
}

export default MainSection