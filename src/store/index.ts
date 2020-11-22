import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import persistReducers from './persistReducers';

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducers(rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
