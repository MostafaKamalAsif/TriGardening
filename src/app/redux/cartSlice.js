import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalQuantity += 1;
      
      // Debug log
      console.log('✅ Item added to cart:', product.name);
      console.log('📦 Total items:', state.totalQuantity);
    },
    
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
        console.log('🗑️ Item removed from cart');
      }
    },
    
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
        console.log('➕ Quantity increased');
      }
    },
    
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        console.log('➖ Quantity decreased');
      } else if (existingItem && existingItem.quantity === 1) {
        state.totalQuantity -= 1;
        state.items = state.items.filter(item => item.id !== id);
        console.log('🗑️ Item removed (quantity reached 0)');
      }
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      console.log('🧹 Cart cleared');
    }
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;