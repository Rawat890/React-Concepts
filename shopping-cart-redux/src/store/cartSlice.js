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
    state.tempItemsArray= [...state.itemsArray]
    state.totalPrice = state.itemsArray.reduce((acc, item)=>acc+item.price*item.quantity, 0)
    },
    removeFromCart: (state, action) => {
    state.itemsArray = state.itemsArray.filter(item => item.id!==action.payload) //as in payload we are passing the id 
    state.tempItemsArray = [...state.itemsArray];
    },
  },
})
export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;