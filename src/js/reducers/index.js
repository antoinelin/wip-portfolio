import { combineReducers } from 'redux'
import ProjectsReducer from './ProjectsReducer'

const rootReducers = combineReducers({
  projects: ProjectsReducer,
})

export default rootReducers
