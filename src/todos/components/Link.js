import React from "react"
import PropTypes from "prop-types"

const Link = ({ text, onClick }) => {
  return <button onClick={ _ => onClick(text) }>{ text }</button>
}

Link.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Link