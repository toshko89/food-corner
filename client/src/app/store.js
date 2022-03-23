import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth.js';
import restaurantSlice from './restaurant.js'
import { loadState } from './localeStorage.js';

const store = configureStore({
  reducer: {
    auth: authSlice,
    restaurant: restaurantSlice,
  },
  preloadedState: loadState()
});

export default store;