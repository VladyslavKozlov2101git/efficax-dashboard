import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { rootMainPath, rootAuthPath, mainPath } from './paths';

const MainRoutes = () => {
  if (!localStorage.token) return <Redirect to={rootAuthPath} />;

  return (
    <Switch>
      <Redirect from={rootMainPath} exact to={mainPath.dashboardProjects.path} />
      {/* <Route path={mainPath.dashboardProjects.path} component={Projects} /> */}

      {/* <Route path='*' component={NotFound} /> */}
    </Switch>
  );
};

export default MainRoutes;
