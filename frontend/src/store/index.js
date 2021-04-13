import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import discussionReducer from "./discussion";
import userReducer from './user';
import projectReducer from './project';
import imageReducer from  './image';

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  discussion: discussionReducer,
  user: userReducer,
  project: projectReducer,
  image: imageReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};


export default configureStore;
