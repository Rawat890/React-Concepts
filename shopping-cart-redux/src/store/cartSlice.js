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
    const existingItem = state.itemsArray.find((item)=>item.id===action.payload.id)
    if (existingItem) {
      existingItem.quantity += 1
    }else{
      state.itemsArray.push({...action.payload, quantity:1}) //to add on any data object that is clciked so that not override the previous one
    }
    }
  }
  
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;