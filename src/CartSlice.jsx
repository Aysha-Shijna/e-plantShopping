import { createSlice, configureStore } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.name === item.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions for dispatching
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer for store configuration
const cartReducer = CartSlice.reducer;

// Configure store here or in a separate file
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
