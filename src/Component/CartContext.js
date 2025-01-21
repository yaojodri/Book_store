



import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = async (book) => {
    const bookWithNumberPrice = {
      ...book,
      price: parseFloat(book.price),
      quantity: 1,
      user_id: localStorage.getItem('user_id'),
    };

    setCart((prevCart) => {
      const existingBook = prevCart.find(b => b.book_id === bookWithNumberPrice.book_id);
      alert(`${book.title} added to cart!`);

      if (existingBook) {
        return prevCart.map(b =>
          b.book_id === bookWithNumberPrice.book_id
            ? { ...b, quantity: b.quantity + 1 }
            : b
        );
      }
      return [...prevCart, { ...bookWithNumberPrice, quantity: 1 }];
    });

    const savedBook = await saveCartToDatabase(bookWithNumberPrice);
    console.log('Saved book with ID:', savedBook);
    if (savedBook && savedBook.id) {
      setCart(prevCart => 
        prevCart.map(b => b.book_id === bookWithNumberPrice.book_id ? { ...b, id: savedBook.id } : b)
      );
    }
  };

  const saveCartToDatabase = async (book) => {
    try {
      const response = await axios.post('http://localhost:8001/api/carts/add', book, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error('Failed to save cart to database');
      }
      return response.data; 
    } catch (error) {
      console.error('Error saving cart:', error.response ? error.response.data : error.message);
      alert('Could not save to cart. Please try again.');
    }
  };

 const removeFromCart = async (cartItem) => {
  const user_id = localStorage.getItem('user_id');

  console.log('Removing cart item:', cartItem);

  if (!cartItem || !cartItem.book_id) {
    console.error('Invalid cart item or book_id is missing:', cartItem);
    alert('Could not find the item to remove.');
    return;
  }

  const bookId = cartItem.book_id; 
  console.log('Removing cart item with book_id:', bookId);

  try {
    setCart((prevCart) => {
      const existingBook = prevCart.find(b => b.book_id === bookId);
      if (existingBook) {
        alert(`${existingBook.title} removed from cart successfully!`);
        if (existingBook.quantity > 1) {
          return prevCart.map(b =>
            b.book_id === bookId 
              ? { ...b, quantity: b.quantity - 1 }
              : b
          );
        }
      }
      return prevCart.filter(book => book.book_id !== bookId);
    });

    await deleteCartFromDatabase(bookId,user_id);
  } catch (error) {
    console.error('Error removing from cart:', error);
    alert('Could not remove from cart. Please try again.');
  }
};
 
  const deleteCartFromDatabase = async (bookId,user_id) => {
    try {
      const response = await axios.delete(`http://localhost:8001/api/carts/${bookId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Failed to delete cart item from database');
      }
    } catch (error) {
      console.error('Error deleting from cart:', error.response ? error.response.data : error.message);
      alert('Could not delete from cart. Please try again.');
    }
  };
  
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart,saveCartToDatabase, deleteCartFromDatabase }}>
      {children}
    </CartContext.Provider>
  );
};













// import axios from 'axios';
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Create the context
// const CartContext = createContext();

// // Custom hook to use the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // Provider component to wrap your app
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
  
  
//   useEffect(() => {
//     const fetchCartFromDatabase = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/carts', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('token')}`,
//           },
//         });
//         // Ensure the response data is in the expected format
//     if (Array.isArray(response.data)) {
//       setCart(response.data); // Set cart state
//     } else {
//       console.error('Unexpected data structure:', response.data);
//     }
//   } catch (error) {
//     console.error('Error fetching cart:', error);
//   }
//   const savedCart = localStorage.getItem('cart');
//   return savedCart ? JSON.parse(savedCart) : [];
//     };

//     fetchCartFromDatabase();
//   }, []);

//   const addToCart = async (book) => {
//     const bookWithNumberPrice = {
//       ...book,
//       price: parseFloat(book.price),
//       quantity: 1,
//       user_id: localStorage.getItem('user_id'),
//     };

//     setCart((prevCart) => {
//       const existingBook = prevCart.find(b => b.book_id === bookWithNumberPrice.book_id);
//       alert(`${book.title} added to cart!`);

//       if (existingBook) {
//         return prevCart.map(b => b.book_id === bookWithNumberPrice.book_id
//           ? { ...b, quantity: b.quantity + 1 }
//           : b
//         );
//       }
//       return [...prevCart, { ...bookWithNumberPrice, quantity: 1 }];
//     });

//     const savedBook = await saveCartToDatabase(bookWithNumberPrice);
//     if (savedBook && savedBook.id) {
//       setCart(prevCart => 
//         prevCart.map(b => 
//           b.book_id === bookWithNumberPrice.book_id ? { ...b, id: savedBook.id } : b
//         )
//       );
//     }
//   };

//   const saveCartToDatabase = async (book) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/carts/add', book, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       });
//       return response.data; 
//     } catch (error) {
//       console.error('Error saving cart:', error.response ? error.response.data : error.message);
//       alert('Could not save to cart. Please try again.');
//     }
//   };

//   const removeFromCart = async (cartItem) => {
//     const bookid = cartItem.book_id;
//    const user_id = localStorage.getItem('user_id');

//     if (!cartItem || !cartItem.book_id) {
//       console.error('Invalid cart item or id is missing:', cartItem);
//       alert('Could not find the item to remove.');
//       return;
//     }

//     try {
//       // Call API to remove from database using ID
//       await deleteCartFromDatabase(bookid,user_id);

//       // If deletion is successful, update the cart state
//       setCart((prevCart) => {
//         const updatedCart = prevCart.filter(book => book.book_id !== bookid);
//         return updatedCart;
//       });

      
//       alert(`${cartItem.title} deleted from cart successfully!`);
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//       alert('Could not remove from cart. Please try again.');
//     }
//   };

//   const deleteCartFromDatabase = async (bookid) => {
//     try {
//       const response = await axios.delete(`http://localhost:8000/api/carts/${bookid}`, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       if (response.status < 200 || response.status >= 300) {
//         throw new Error('Failed to delete cart item from database');
//       }
//     } catch (error) {
//       console.error('Error deleting from cart:', error.response ? error.response.data : error.message);
//       alert('Could not delete from cart. Please try again.');
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart,saveCartToDatabase, deleteCartFromDatabase  }}>
//       {children}
//     </CartContext.Provider>
//   );
// };