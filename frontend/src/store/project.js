import { fetch } from './csrf';

const LOAD_PROJECTS = 'projects/LOAD_PROJECTS';

const loadProjects = (projects) => {
  return {
    type: LOAD_PROJECTS,
    projects
  }
}

export const loadAllProjects = () => async dispatch => {
  console.log('oooooooooooooooooooooo')
  const response = await fetch(`/api/projects/all`)
  const projects = response.data;
  dispatch(loadProjects(projects))
}


const projectReducer = (state = {}, action) => {
  let newState = {...state}
  switch(action.type) {
    case LOAD_PROJECTS:
      action.projects.map(project => {
        return newState[project.id] = project;
      });
      return newState;
    default:
      return state;
  }
}

export default projectReducer;
