import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import {
  Route as DOMRoute,
  RouteProps as DOMRouteProps,
  Redirect,
} from 'react-router-dom';
import { RootState } from '../store/modules/rootTypes';

interface RouteProps extends DOMRouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) => {
  const { authUser } = useSelector((state: RootState) => ({
    authUser: state.user.authUser,
  }));

  return (
    <DOMRoute
      {...rest}
      render={props => {
        const { location } = props;
        return isPrivate === !!authUser.uid ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
