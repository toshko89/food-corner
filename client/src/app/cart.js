import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  orders: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const product = state.orders.find(order => order.product._id === action.payload.product._id);
      if (product) {
        product.quantity += 1;
      } else {
        state.orders.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart(state, action) {
      const product = state?.orders.find(order => order.product._id === action.payload.product._id);
      if (product) {
        if (product.quantity === 1) {
          state.orders = state.orders.filter(order => order.product._id !== action.payload.product._id);
        } else {
          product.quantity -= 1;
        }
        localStorage.setItem('cart', JSON.stringify(state));
      }
    }
    // // autoLoadCart(state) {
    // //   const cart = localStorage.getItem('cart');
    // //   if (cart) {
    // //     state.restaurants = JSON.parse(cart).restaurants;
    // //   }
    // // },
    // clearCartOrder(state, action) {
    //   const restaurant = state.restaurants.find(x => x.restaurantId === action.payload.restaurantId);
    //   const index = state.restaurants.indexOf(restaurant);
    //   state.restaurants.splice(index, 1);
    //   localStorage.setItem('cart', JSON.stringify(state));
    // }
  }
});

export const { addToCart, removeFromCart, autoLoadCart, clearCartOrder } = cartSlice.actions;

export default cartSlice.reducer;