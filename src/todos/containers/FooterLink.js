import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { visibleFilterState, setVisibleFilter } from "../actions"
import Link from "../components/Link"

const FooterLink = ({ dispatch }) => {
  const filterNames = Object.values(visibleFilterState)
  
  return <div id="footer-link">
    {
      filterNames.map(filterName => <Link text={ filterName } 
        onClick={ filter => dispatch(setVisibleFilter(filter)) } 
        key={ filterName } />)
    }
  </div>
}

FooterLink.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(FooterLink)