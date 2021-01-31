import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import ProjectHome from './components/ProjectHome/ProjectHome';
import ProjectDisplay from './components/ProjectDisplay';
import { ImageProvider } from './context/imagecontext';
import * as userActions from './store/user';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(userActions.loadAllUsers())
  }, [dispatch])

  return (
    <ImageProvider>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <ProjectHome />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/projects/:id'>
            <ProjectDisplay />
          </Route>
        </Switch>
      )}
    </ImageProvider>
  );
}

export default App;
