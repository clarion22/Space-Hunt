import { fetch } from './csrf';
const LOAD_USERS = 'users/LOAD_USERS';

const loadUsers = (users) => {
  return {
    type: LOAD_USERS,
    payload: users
  }
}

export const loadAllUsers = () => async dispatch => {
  const response = await fetch(`/api/users`)
  const users = response.data;
  dispatch(loadUsers(users))
}


const userReducer = (state = {}, action) => {
  let newState = {...state};
  switch (action.type) {
    case LOAD_USERS:
      action.payload.map(user => {
        return newState[user.id] = user;
      });
      return newState;
    default:
      return state;
  }
}

export default userReducer;
