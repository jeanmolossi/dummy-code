import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from './modules/rootTypes';

export default (reducers: any) => {
  const persistedReducer = persistReducer<RootState>(
    {
      key: '@dummy-code-wapp',
      storage,
      whitelist: ['user'],
    },
    reducers,
  );

  return persistedReducer;
};
