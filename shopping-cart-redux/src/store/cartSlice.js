import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsArray:[], //Final cart items
  tempItemsArray:[], //temporary items for update
  totalPrice:0,
}

const cartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers:{  //action creators
  addToCart: (state, action) => {
    alert('hey')
    }
  }
  
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;