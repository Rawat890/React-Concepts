import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'products',
  initialState:{
    items:[],
    loading:false,
    status: 'idle'
  }
})
export default productSlice.reducer;