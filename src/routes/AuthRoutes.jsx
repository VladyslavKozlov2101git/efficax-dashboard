import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { authPath, rootAuthPath, rootMainPath } from './paths';
import { SignIn } from '../pages/SignIn';

const AuthRoutes = () => {
  if (localStorage.token) return <Redirect to={rootMainPath} />;

  return (
    <Switch>
      <Redirect from={rootAuthPath} exact to={authPath.signIn} />
      <Route path={authPath.signIn} exact component={SignIn} />

      {/* <Route path='*' component={NotFound} /> */}
    </Switch>
  );
};

export default AuthRoutes;
