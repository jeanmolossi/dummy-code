import React from 'react';
import { AuthContext } from './Auth';

const AppContextProvider: React.FC = ({ children }) => {
  return <AuthContext>{children}</AuthContext>;
};

export default AppContextProvider;
