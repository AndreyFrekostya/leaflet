import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import selectedRouteReducer from './slices/selectedRouteSlice';
import { rootWatcher } from './sagas';
import selectedRouteInTableReducer from './slices/selectedRouteInTableSlice';
import ErrorsReducer from './slices/ErrorsSlice';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    selectedRoute:selectedRouteReducer,
    routeInTable:selectedRouteInTableReducer,
    errors:ErrorsReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootWatcher)
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;