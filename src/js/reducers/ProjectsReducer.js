import ActionTypes from './../constants'

export default function ProjectsReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GetProjectsRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: '',
      })
    }
    case ActionTypes.GetProjectsRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting projects',
      })
    }
    case ActionTypes.GetProjectsFulfilled: {
      const { projects } = action.projects
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got users',
      })
      newState.projects = []
      if (projects) {
        newState.projects = Object.keys(projects).map(i => projects[i])
      }
      return newState
    }
    default:
      return state
  }
}
