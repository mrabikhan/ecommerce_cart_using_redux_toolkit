import React from 'react'
import Label from './Label'
import Footer from './Footer'

function Checkout() {
  return (
    <div>
        <Label />
         <div className="checkout-container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <form>
          {/* Billing Details */}
          <div className="section">
            <h3>Billing Details</h3>
            <div className="row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone Number" required />
              <input type="text" placeholder="City" required />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="section">
            <h3>Shipping Address</h3>
            <textarea placeholder="Complete Address" rows="4" required></textarea>
          </div>

          {/* Payment Method */}
          <div className="section">
            <h3>Payment Method</h3>
            <select required>
              <option value="">Select Payment Method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className="submit-btn">
            <button type="submit">Place Order</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Checkout