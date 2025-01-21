

import React from 'react';
import { useCart } from './CartContext'; 

const Cart = ({ isActive, onClose }) => {
  const { cart, removeFromCart } = useCart(); 

  const totalPrice = cart.reduce((total, book) => {
    return total + (typeof book.price === 'number' ? book.price * book.quantity : 0);
  }, 0);

  return (
    <div className={`cart-container ${isActive ? "active" : ""}`}>
      <div id="close-cart-btn" className="fas fa-times" onClick={onClose}></div>
      <div className='cart-form'>
          <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((book,book_id) => (
                <tr key={book_id}>
                  <td>{book.title}</td>
                  <td>{book.quantity}</td>
                  <td>GH₵{(book.price * book.quantity).toFixed(2)}</td>
                  <td>
                    <button className = "btns" onClick={() => removeFromCart(book) }>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="total-price">
          <h3>Total Price: GH₵{totalPrice.toFixed(2)}</h3>
        </div>
        <div className='order-btn' >
          <button className="order-button">Place your Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;













