import {
  configureStore, ThunkAction, Action, getDefaultMiddleware
} from '@reduxjs/toolkit';

import exampleReducer from './example';
import userReducer from './infouser';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    example: exampleReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
