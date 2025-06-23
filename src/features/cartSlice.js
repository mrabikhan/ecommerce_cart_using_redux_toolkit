import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],      //Final Cart Items
    tempItems: [],  //Temporary Items for Update
    shipping: 10,   
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
          const existingItem = state.items.find(item => item.id === action.payload.id)
          if(existingItem){
            existingItem.quantity += 1
          }
          else{
            state.items.push({...action.payload,quantity:1})
           //...action.payload has the value or current and previous items added in the cart
          }  
          state.tempItems = [...state.items]
          state.totalPrice = state.items.reduce((sum, item) =>
             sum + item.price * item.quantity + state.shipping, 0)
        },
        
        updateTempQuantity: (state, action) => {
          const tempItem = state.tempItems.find(item => item.id === action.payload.id) 
          if(tempItem){
            tempItem.quantity = action.payload.quantity
          }
        },

        applyTempUpdate:(state, action) => {
          const tempItem = state.tempItems.find(item => item.id === action.payload)
          const cartItem = state.items.find(item => item.id === action.payload ) 
          if(cartItem && tempItem){
            cartItem.quantity = tempItem.quantity
          }
          state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        },

        removeToCart:(state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload )
            state.tempItems = [...state.items]
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

        }
    }
}) 

export const {addToCart, updateTempQuantity, applyTempUpdate, removeToCart} = cartSlice.actions
export default cartSlice.reducer