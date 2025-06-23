import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Label from './Label'
import { applyTempUpdate, removeToCart, updateTempQuantity } from '../features/cartSlice'

function Cart() {
  const {items:cartItems, tempItems, totalPrice, shipping } = useSelector(state => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRemoveItem = (id) => {
     dispatch(removeToCart(id))
  }

  const handleUpdateQuantity = (id, quantity) => {
     dispatch(updateTempQuantity({id, quantity})) //when we pass more than 1 parameter1 in a function then we use ({id, quantity})
  }

  const handleApplyUpdates = () => {
    tempItems.forEach((item) => {
        dispatch(applyTempUpdate(item.id))
    })
  }

  return (
    
   <div>
   <Label />
   <div className='wrapper'>
   {cartItems.length === 0 ? (
    <div className='cart-empty'> <h3> Your Cart is Empty </h3> 
    <button onClick={() => navigate('/')}> Back to Home </button>
    </div>
   ):
   (<div className='cart-page-container'>
    <div className='cart-container'>
      <h2> Your Cart </h2>
      
      {
        cartItems.map((item) => (
        <div className='cart-item' key={item.id} >
        <img src={item.image} alt={item.title}/>
         <div className='cart-item-details'>
          <h3> {item.title} </h3>
          <p> Price: ${item.price}/- </p> 
           <div>
             <input 
              type='number'
              min='1'
              value={tempItems.find((tempItems) => tempItems.id === item.id)?.quantity || item.quantity}  
              onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
              />
              
             <button
              onClick={handleApplyUpdates}
             ><i className="fas fa-edit"></i> Update Item </button>
             
             <button
             onClick={() => handleRemoveItem(item.id)}
             ><i className="fa-solid fa-trash"></i> Remove Item </button>
           </div>
         </div>
       </div> 
        )
       )}

       <div className='cart-total'>
        <p className='shipping'><i className="fa-solid fa-truck"></i> Shipping Fee: ${shipping}</p>
        <p><i className="fa-solid fa-money-bill"></i> Total: ${totalPrice.toFixed(2)}</p>
       </div>

       <div className='cart-buttons'>
        <button
        onClick={() => navigate('/')}
        className='back-button'
        ><i className="fa-solid fa-bag-shopping"></i> Back to shopping </button>

        <button
        onClick={() => navigate('/checkout')}
        className='back-button'> Proceed Checkout <i className="fa-solid fa-arrow-right"></i> </button>   
        </div>
    
    </div>
   </div>)}
  </div> 
  </div>
  )
}

export default Cart