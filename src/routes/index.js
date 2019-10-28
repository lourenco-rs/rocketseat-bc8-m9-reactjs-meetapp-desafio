import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/auth/SignIn';
import SignUp from '~/pages/auth/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import FormMeetup from '~/pages/FormMeetup';
import Details from '~/pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/formmeetup" component={FormMeetup} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
