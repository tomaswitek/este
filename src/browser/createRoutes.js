import App from './app/App.react';
import Auth from './auth/AuthPage.react';
import Fields from './fields/FieldsPage.react';
import Firebase from './firebase/FirebasePage.react';
import Home from './home/HomePage.react';
import Intl from './intl/IntlPage.react';
import Me from './me/MePage.react';
import NotFound from './notfound/NotFoundPage.react';
import Profile from './me/ProfilePage.react';
import React from 'react';
import Settings from './me/SettingsPage.react';
import Todos from './todos/TodosPage.react';
import Timers from './timers/TimersPage.react';
import NewTimerPage from './timers/NewTimerPage.react';
import { IndexRoute, Route } from 'react-router';

export default function createRoutes(getState) {
  const requireAuth = (nextState, replace) => {
    const loggedInUser = getState().users.viewer;
    if (!loggedInUser) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Auth} path="login" />
      <Route component={Intl} path="intl" />
      <Route component={Fields} path="fields" />
      <Route component={Firebase} path="firebase" />
      <Route component={Me} onEnter={requireAuth} path="me">
        <Route component={Profile} path="profile" />
        <Route component={Settings} path="settings" />
      </Route>
      <Route component={Todos} path="todos" />
      <Route component={Timers} path="timers" />
      <Route component={NewTimerPage} path="new-timer" />
      <Route component={NotFound} path="*" />
    </Route>
  );
}
