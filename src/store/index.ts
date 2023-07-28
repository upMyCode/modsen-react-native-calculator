import { combineReducers, configureStore } from '@reduxjs/toolkit';

import themeReducer from '../reducers/themeReducer';

const rootReducer = combineReducers({
  themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
