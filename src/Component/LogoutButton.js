







// import React from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const LogoutButton = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth(); 

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/logout', {}, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`,
//         },
//       });

//       logout(); 
//       alert("Logout Successful");

//       navigate('/login'); 
//     } catch (error) {
//       console.error('Logout failed:', error.response?.data?.message || 'Network error');
//     }
//   };

//   return (
//     <button onClick={handleLogout} className="logout-button">
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;




import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useCart } from './CartContext';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { cart, setCart } = useCart();

  const handleLogout = async () => {
    try {
      // Clear cart
      setCart([]);
      localStorage.removeItem('cart');

      // Delete cart items from database
      // await Promise.all(cart.map((item) => {
      //   axios.delete(`http://localhost:8001/api/carts/${item.book_id}`, {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
      //     },
      //   });
      // }));

      // Logout
      await axios.post('http://localhost:8001/api/logout', {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.response?.data?.message || 'Network error');
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
