import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.js';
import { loadState } from './localeStorage.js';

const store = configureStore({
  reducer: {
    auth: authSlice
  },
  preloadedState: loadState()
});

export default store;