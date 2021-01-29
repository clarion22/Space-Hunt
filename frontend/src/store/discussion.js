import { fetch } from './csrf';
const LOAD_DISCUSSIONS = 'discussions/LOAD_DISCUSSIONS';
const ADD_ONE_DISCUSSION = 'discussions/ADD_ONE_DISCUSSION';
const loadDiscussions = (discussions) => {
  return {
    type: LOAD_DISCUSSIONS,
    payload: discussions,
  }
}

const addDiscussion = (discussion) => {
  return {
    type: ADD_ONE_DISCUSSION,
    payload: discussion
  }
}

export const getDiscussions = (id) => async dispatch => {
  const response = await fetch(`/api/projects/${id}`)
  const discussionsList = response.data;
  dispatch(loadDiscussions(discussionsList));
}

export const addOneDiscussion = (data) => async dispatch => {
  const {content, projectId, userId} = data;
  console.log('inside the thunk add discussion')
  const response = await fetch(`/api/projects/${projectId}/discussions`, {method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({content, projectId, userId}),});
  dispatch(addDiscussion(response.data));
  return response;

}

const discussionReducer = (state = {}, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOAD_DISCUSSIONS:
      action.payload.map(discussion => {
        return newState[discussion.id] = discussion;
      });
      return newState;
    case ADD_ONE_DISCUSSION:
      newState[action.payload.discussion.id] = action.payload.discussion;
      return newState;
    default:
      return state;
  }
}

export default discussionReducer;
