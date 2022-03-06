import { createSlice } from '@reduxjs/toolkit'

const authState = {
  email: undefined,
  isOwner: false,
  _id: undefined,
  phone: undefined,
  fullName: undefined,
  city: undefined,
  address: undefined,
  favorites: []
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    //TODO....
  }

});