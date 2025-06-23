import React, { useEffect} from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/productSlice'
import toast, { Toaster } from 'react-hot-toast';
import { addToCart } from '../features/cartSlice';
import Footer from './Footer';
import Pagination from './Pagination';

function ProductList() {
    const {items:products, status} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
      if(status === 'idle'){
         dispatch(fetchProducts())
      }
     }, [status]) //Passing Empty dependency array because we want to run this effect once on page reload.
      
    if(status === 'loading'){
       return <p> Loading Products... </p>
    } 

    if(status === 'failed'){
        return toast('Failed To Load Products', {
        icon: '⛔',
        duration: 5000,
        style: {
           borderRadius: '5px',
           background: '#333',
           color: '#fff',
    },
    })}

    return (
     <>
     <Navbar />
     <h1 className='store-head'>Explore Products</h1>
     <div className='product-list'>
     {
      products.map(product => (
      <div className='product-card' key={product.id}>
       <img src = {product.image} alt = {product.title} />
        <h2> {product.title.slice(0, 20)}... </h2>
        <span> In Stock </span>
        <p> Price: ${product.price}/- </p>
        <button onClick={() => {
            dispatch(addToCart(product))
            toast('Item added to cart', {
             icon: '✅',
             duration: 3000,
             style: {
               borderRadius: '5px',
               background: '#DBE2E9',
               color: '#568203',
               fontWeight:'bold',
               borderBottom:'4px solid',
               borderBlockColor:'orange',
               marginTop:'60px'
              },
            })
            }}>
        
        <i className="fa fa-plus-circle"></i> Add to Cart </button> 
     </div>
    ))}
    </div>
    <Pagination />
    <Footer />
     </>
  )
}

export default ProductList