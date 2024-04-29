import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mathExpressionReducer from 'src/reducers/mathExpressionReducer';
import mathResultReducer from 'src/reducers/mathResultReducer';

import operationListReducer from '../reducers/operationListReducer';
import themeReducer from '../reducers/themeReducer';

const rootReducer = combineReducers({
  themeReducer,
  operationListReducer,
  mathExpressionReducer,
  mathResultReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
