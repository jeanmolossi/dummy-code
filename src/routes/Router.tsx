import React from 'react';
import { Switch } from 'react-router-dom';
import {
  ForgotPassword,
  Home,
  Profile,
  Modules,
  SignIn,
  SignUp,
  Notifications,
  Module,
  Lesson,
  ConfirmAccount,
  CreatePost,
} from '../pages';
import Cam from '../pages/CreatePost/Cam';
import { Route } from './index';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/confirm-account" component={ConfirmAccount} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/favorites" component={Home} isPrivate />
      <Route path="/notifications" component={Notifications} isPrivate />
      <Route path="/modules" component={Modules} isPrivate />
      <Route path="/chat" component={Home} isPrivate />

      <Route path="/create-post" component={CreatePost} isPrivate />
      <Route path="/cam" component={Cam} isPrivate />

      <Route
        path={['/module/:moduleId', '/module']}
        component={Module}
        isPrivate
      />
      <Route path={['/lesson/:id', '/lesson']} component={Lesson} isPrivate />
    </Switch>
  );
};

export default Router;
