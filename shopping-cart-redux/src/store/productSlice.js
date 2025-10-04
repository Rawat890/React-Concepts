import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//automatically dispatches the promise life cycle actions thatg is listened in extra reducers
export const fetchProductList = createAsyncThunk('products.fetchProducts', async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
})

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    status: 'idle'
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state) => {
      state.loading = true,
      state.status = 'loading'
    })
    .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false,
        state.status = 'success',
        state.items = action.payload
      })
    .addCase(fetchProductList.rejected, (state) => {
        state.loading = false,
        state.status = 'failed'
      })
  }

})
export default productSlice.reducer;