import React from "react"
import classNames from "classnames"

const Link = ({ selected, children, onVisibleFilter }) => {
  return <a className={ classNames({ selected }) }
      href={ `#/${ children }` }
      style={{ cursor: "pointer" }}
      onClick={ onVisibleFilter }>
    { children }
  </a>
}

export default Link 