import React from 'react';
import {lazy, Suspense, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import useAuthListener from './hooks/use-auth-listener';
import * as ROUTES from './constants/routes';
import UserContext from './context/user'
import ProtectedRoute from './helpers/protected-route'


const CollectionForm = lazy(() => import ('./pages/collection-form'));
const Login = lazy(() => import ('./pages/login'));
const Summary = lazy(() => import ('./pages/summary'));
const NotFound = lazy(() => import ('./pages/not-found'));

function App() {
    const { user } = useAuthListener();


  return (
    <UserContext.Provider value ={{user}}>
    <Router>
      <Suspense fallback = {<p>Loading...</p>}>
        <Switch>
          <ProtectedRoute user={user} path={ROUTES.COLLECTION_FORM} exact >
            <CollectionForm />
          </ProtectedRoute>
          <Route path={ROUTES.LOGIN} component={Login} />
          <ProtectedRoute user={user} path={ROUTES.SUMMARY}>
            <Summary />
          </ProtectedRoute>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
