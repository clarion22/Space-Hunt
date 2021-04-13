import { fetch } from './csrf';



const LOAD_IMAGES = 'images/LOAD_IMAGES';

const loadImages = (images) => {
  return {
    type: LOAD_IMAGES,
    images
  }
}

export const getImages = (projectId) => async dispatch => {
  console.log('step 1')
  // const response = await fetch(`https://pixabay.com/api/?key=20010415-a6682cfb4ce63170711548b9b&q=outer+space&image_type=photo`)
  // const data = await response;
  // console.log('get images', data.data.hits)
  // const images = data.data.hits;
  // dispatch(loadImages(images))
  // return images;
  const response = await fetch(`/api/images/projectimg/${projectId}`)
  // console.log('line 23', response.data.Contents)
  dispatch(loadImages(response))
}

const imageReducer = (state = {images: []}, action) => {
  let newState = {...state}
  switch(action.type) {
    case LOAD_IMAGES:
      newState.images = action.images.data;
      return newState;
    default:
      return state;
  }
}

export default imageReducer;
