import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

//createAsyncThunk is used to dispatch promise life cycle actions.
//These promise life cycle actions can be listened through extra reducers.
//The dispatched life cycle actions can be pending, rejected or fullfilled
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => { 
    //products is a 'Slice Name' and fetchProducts is an 'Action Type'
    //Write code to fetch API data
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data //In axios we dont need to write .json() in response.
}) 
export const productSlice = createSlice({
    name:'products',
    initialState:{
        items:[],
        status:'idle',
        error: 'null'
    },
    extraReducers:(builder) => {
      builder
      .addCase(fetchProducts.pending, (state) => { //pending async lifecycle method
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => { //fullfilled async lifecycle method
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => { //rejected async lifecycle method
        state.status = 'failed'
        state.error = action.error.message
      })
    }
})

export default productSlice.reducer