import { createSlice } from '@reduxjs/toolkit'

const authState = {
  email: null,
  isOwner: false,
  _id: null,
  phone: null,
  fullName: null,
  city: null,
  address: null,
  favorites: []
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    loginStateChange(state, action) {
      state.email = action.payload.email;
      state.isOwner = action.payload.isOwner;
      state._id = action.payload._id;
      state.phone = action.payload.phone;
      state.fullName = action.payload.fullName;
      state.city = action.payload.city;
      state.address = action.payload.address;
    },
    logoutStateChange(state) {
      state.email = null;
      state.isOwner = null;
      state._id = null;
      state.phone = null;
      state.fullName = null;
      state.city = null;
      state.address = null;
    }
  }

});

export const { loginStateChange, logoutStateChange } = authSlice.actions;

export default authSlice.reducer;