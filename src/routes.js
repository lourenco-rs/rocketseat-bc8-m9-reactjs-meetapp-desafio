import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '~/pages/auth/SignIn';
import SignUp from '~/pages/auth/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import New from '~/pages/New';
import Edit from '~/pages/Edit';
import Details from '~/pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={New} />
      <Route path="/edit" component={Edit} />
      <Route path="/details" component={Details} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}
