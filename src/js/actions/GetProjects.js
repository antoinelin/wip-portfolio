import ActionTypes from './../constants'
import database from './database'

// Request action
// ---------------------------------o
function getProjectsRequestedAction() {
  return {
    type: ActionTypes.GetProjectsRequested,
  }
}
// Action rejected
// ---------------------------------o
function getProjectsRejectedAction() {
  return {
    type: ActionTypes.GetProjectsRejected,
  }
}
// Action fullfilled
// ---------------------------------o
function getProjectsFulfilledAction(projects) {
  return {
    type: ActionTypes.GetProjectsFulfilled,
    projects,
  }
}

// Dispatch Firebase data through the store
// -------------------------------------------------o
export function getProjects() {
  return dispatch => {
    dispatch(getProjectsRequestedAction())
    // Database call
    return database.ref('/').once('value', snap => {
      const projects = snap.val()
      dispatch(getProjectsFulfilledAction(projects))
    })
    .catch((error) => {
      console.log('%The read failed' + error, 'color: #da5555; font-size: 13px')
      dispatch(getProjectsRejectedAction())
    })
  }
}
