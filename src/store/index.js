import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { socialFeedReducer } from './reducers/socialFeed';

const rootReducer = combineReducers({
  socialFeed: socialFeedReducer
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true
});
