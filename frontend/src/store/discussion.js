import { fetch } from './csrf';
const LOAD_DISCUSSIONS = 'discussions/LOAD_DISCUSSIONS';
const ADD_ONE_DISCUSSION = 'discussions/ADD_ONE_DISCUSSION';
const REMOVE_ONE_DISCUSSION = 'discussions/REMOVE_ONE_DISCUSSION';
const ADD_ONE_REPLY = 'discussions/ADD_ONE_REPLY';
const REMOVE_ONE_REPLY = 'discussions/REMOVE_ONE_REPLY';

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

const removeDiscussion = (discussionId) => {
  return {
    type: REMOVE_ONE_DISCUSSION,
    discussionId
  }
}

const addReply = (reply) => {
  return {
    type: ADD_ONE_REPLY,
    reply
  }
}

const removeReply = (reply) => {
  return {
    type: REMOVE_ONE_REPLY,
    reply
  }
}

export const getDiscussions = (id) => async dispatch => {
  const response = await fetch(`/api/projects/${id}`)
  const discussionsList = response.data;
    discussionsList.forEach(discussion => {
    const reviews = {};
    discussion.Reviews.forEach(review => reviews[review.id] = review)
    discussion.Reviews = reviews;
    })
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

export const deleteOneDiscussion = (projectId, discussionId) => async dispatch => {

  const url = `/api/projects/${projectId}/discussions/${discussionId}`;
  const response = await fetch(url, {method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
},
})
  dispatch(removeDiscussion(response.data));
}

export const addOneReply = (reply) => async dispatch => {
  const {parent_id, user_id, content} = reply;
  const response = await fetch(`/api/reviews`, {method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({parent_id, user_id, content})});
  console.log('hitting addonereply thunk')
  console.log(response.data.reply)
  dispatch(addReply(response.data.reply));
  return response;
}

export const removeOneReply = (reply) => async dispatch => {
  const response = await fetch(`/api/reviews/${reply.id}`, {method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
},
})
  dispatch(removeReply(response.data));
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
    case REMOVE_ONE_DISCUSSION:
      delete newState[action.discussionId];
      return newState;
    case ADD_ONE_REPLY:
      newState[action.reply.parent_id].Reviews[action.reply.id] = action.reply;
      return newState;
    case REMOVE_ONE_REPLY:
      delete newState[action.reply.parent_id].Reviews[action.reply.id]
      return newState;
    default:
      return state;
  }
}

export default discussionReducer;
