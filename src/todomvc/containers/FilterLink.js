import { connect } from "react-redux"
import { setVisibleFilter } from "../actions"
import Link from "../components/Link"

const mapStateToProps = ({ visibleFilter }, ownProps) => ({
  selected: visibleFilter === ownProps.filter 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onVisibleFilter: () => dispatch(setVisibleFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)