import { connect } from 'react-redux'
import { getProjects } from './../../actions/GetProjects'
import Wrapper from './../../components/Wrapper'

function mapStateToProps(state) {
  return {
    projects: state.projects,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onGetProjects: () => dispatch(getProjects()),
  }
}

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Wrapper)

export default LandingContainer
