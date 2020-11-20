import rootReducer from './rootReducer';

export type ActionReturnType<A = string, T = any> = {
  type: A;
  payload: T;
};

export type RootState = ReturnType<typeof rootReducer>;
