import { fetch } from './csrf';

const LOAD_IMAGES = 'projects/LOAD_PROJECTS';

const loadImages = (images) => {
  return {
    type: LOAD_IMAGES,
    images
  }
}

const imageReducer = (state = {}, action) => {
  let newState = {...state}
  switch(action.type) {
    case LOAD_IMAGES:
     //state will go here
      return newState;
    default:
      return state;
  }
}

export default imageReducer;
