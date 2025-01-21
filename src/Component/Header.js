
import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';

const Header = ({ onSearch }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleUserIconClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleCartClick = () => {
    if (isLoggedIn) {
      setShowCart(true); 
    } else {
      alert('Please log in to access your cart.'); // Alert if not logged in
    }
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeForms = () => {
    setShowLogin(false);
    setShowSignup(false);
    setShowCart(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      localStorage.removeItem('token'); // Remove the token on logout
      alert('You have successfully logged out!'); 
      setIsLoggedIn(false); 
    } catch (error) {
      console.error('Logout failed:', error.response?.data?.message || 'Network error');
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <div>
      <header className="header">
        <div className="header-1">
          <a href="#" className="logo">
            <i className="fas fa-book"></i> bookly
          </a>

          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              placeholder="Search books..."
              value={searchQuery}
              onChange={handleSearchChange}
              id="search-swiper-slide"
            />
            <label htmlFor="search-swiper-slide" className="fas fa-search"></label>
          </form>

          <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-shopping-cart" onClick={handleCartClick}></a>
            <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>

            {isLoggedIn && (
              // <button onClick={handleLogout} className="logout-button fas fa-user-circle"></button>
               <button onClick={handleLogout} className="logout-button">Logout</button>

            )}
          </div>
        </div>

        <div className="header-2">
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#featured">Featured</a>
            <a href="#arrivals">Arrivals</a>
            <a href="#reviews">Reviews</a>
            <a href="#blogs">Contact</a>
            <a href="#genre">Genre</a>
          </nav>
        </div>
      </header>

      <Login isActive={showLogin} onClose={closeForms} onSignupClick={handleSignupClick} />
      <Signup isActive={showSignup} onClose={closeForms} onSignInClick={handleUserIconClick} />
      <Cart isActive={showCart} onClose={closeForms} onCartClick={handleCartClick} />
    </div>
  );
};

export default Header;







// import React, { useState } from 'react';
// import axios from 'axios';
// import Login from './Login';
// import Signup from './Signup';
// import Cart from './Cart';

// const Header = ({ onSearch }) => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showCart, setShowCart] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   const handleUserIconClick = () => {
//     setShowLogin(true);
//     setShowSignup(false);
//   };

//   const handleCartClick = () => {
//     if (isLoggedIn) {
//       setShowCart(true); 
//     } else {
//       alert('Please log in to access your cart.'); // Alert if not logged in
//     }
//   };

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setShowLogin(false);
//   };

//   const closeForms = () => {
//     setShowLogin(false);
//     setShowSignup(false);
//     setShowCart(false);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/logout', {}, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       localStorage.removeItem('token'); // Make sure to remove the token on logout
//       alert('You have successfully logged out!'); 
//       setIsLoggedIn(false); 
//     } catch (error) {
//       console.error('Logout failed:', error.response?.data?.message || 'Network error');
//     }
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     onSearch(query); 
//   };

//   return (
//     <div>
//       <header className="header">
//         <div className="header-1">
//           <a href="#" className="logo">
//             <i className="fas fa-book"></i> bookly
//           </a>

//           <form className="search-form" onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="search"
//               placeholder="Search books..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               id="search-swiper-slide"
//             />
//             <label htmlFor="search-swiper-slide" className="fas fa-search"></label>
//           </form>

//           <div className="icons">
//             <a href="#" className="fas fa-heart"></a>
//             <a href="#" className="fas fa-shopping-cart" onClick={handleCartClick}></a>
//             <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>

//             {isLoggedIn && (
//               <div className="user-icon">
//                 <button onClick={handleLogout} className="logout-button">Logout</button>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="header-2">
//           <nav className="navbar">
//             <a href="#home">Home</a>
//             <a href="#featured">Featured</a>
//             <a href="#arrivals">Arrivals</a>
//             <a href="#reviews">Reviews</a>
//             <a href="#blogs">Contact</a>
//             <a href="#genre">Genre</a>
//           </nav>
//         </div>
//       </header>

//       <Login isActive={showLogin} onClose={closeForms} onSignupClick={handleSignupClick} />
//       <Signup isActive={showSignup} onClose={closeForms} onSignInClick={handleUserIconClick} />
//       <Cart isActive={showCart} onClose={closeForms} onCartClick={handleCartClick} />
//     </div>
//   );
// };

// export default Header;









// import React, { useState } from 'react';
// import axios from 'axios';
// import Login from './Login';
// import Signup from './Signup';
// import Cart from './Cart';

// const Header = ({ onSearch }) => { 
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showCart, setShowCart] = useState(false);

//   const handleUserIconClick = () => {
//     setShowLogin(true);
//     setShowSignup(false);
//   };

//   const handleCartClick = () => {
//     setShowCart(true);
//   };

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setShowLogin(false);
//   };

//   const closeForms = () => {
//     setShowLogin(false);
//     setShowSignup(false);
//     setShowCart(false);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/logout', {}, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       localStorage.removeItem('token');
//       alert('You have successfully logged out!'); // Alert on successful logout
//     } catch (error) {
//       console.error('Logout failed:', error.response?.data?.message || 'Network error');
//     }
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     onSearch(query); 
//   };

//   return (
//     <div>
//       <header className="header">
//         <div className="header-1">
//           <a href="#" className="logo">
//             <i className="fas fa-book"></i> bookly
//           </a>

//           <form className="search-form" onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="search"
//               placeholder="Search books..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               id="search-swiper-slide"
//             />
//             <label htmlFor="search-swiper-slide" className="fas fa-search"></label>
//           </form>

//           <div className="icons">
//             <a href="#" className="fas fa-heart"></a>
//             <a href="#" className="fas fa-shopping-cart" onClick={handleCartClick}></a>
//             <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>
//             <button onClick={handleLogout} className="logout-button">Logout</button>
//           </div>
//         </div>

//         <div className="header-2">
//           <nav className="navbar">
//             <a href="#home">Home</a>
//             <a href="#featured">Featured</a>
//             <a href="#arrivals">Arrivals</a>
//             <a href="#reviews">Reviews</a>
//             <a href="#blogs">Contact</a>
//             <a href="#genre">Genre</a>
//           </nav>
//         </div>
//       </header>

//       <Login isActive={showLogin} onClose={closeForms} onSignupClick={handleSignupClick} />
//       <Signup isActive={showSignup} onClose={closeForms} onSignInClick={handleUserIconClick} />
//       <Cart isActive={showCart} onClose={closeForms} onCartClick={handleCartClick} />
//     </div>
//   );
// };

// export default Header;











// import React, { useState } from 'react';
// import axios from 'axios';
// import Login from './Login';
// import Signup from './Signup';
// import Cart from './Cart';

// const Header = ({ onSearch }) => { 
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showCart, setShowCart] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   const handleUserIconClick = () => {
//     setShowLogin(true);
//     setShowSignup(false);
//   };

//   const handleCartClick = () => {
//     setShowCart(true);
//   };

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setShowLogin(false);
//   };

//   const closeForms = () => {
//     setShowLogin(false);
//     setShowSignup(false);
//     setShowCart(false);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/logout', {}, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       localStorage.removeItem('token');
//       alert('You have successfully logged out!'); 

//       setIsLoggedIn(false); // Update the login state
//     } catch (error) {
//       console.error('Logout failed:', error.response?.data?.message || 'Network error');
//     }
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     onSearch(query); 
//   };

//   return (
//     <div>
//       <header className="header">
//         <div className="header-1">
//           <a href="#" className="logo">
//             <i className="fas fa-book"></i> bookly
//           </a>

//           <form className="search-form" onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="search"
//               placeholder="Search books..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               id="search-swiper-slide"
//             />
//             <label htmlFor="search-swiper-slide" className="fas fa-search"></label>
//           </form>

//           <div className="icons">
//             <a href="#" className="fas fa-heart"></a>
//             <a href="#" className="fas fa-shopping-cart" onClick={handleCartClick}></a>
//             <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>

//             {isLoggedIn && (
//               <div className="user-icon" onClick={handleLogout} style={{ cursor: 'pointer' }}>
//                 <i className="fas fa-power-off"></i>
//                  {/* <i className="fas fa-sign-out-alt"></i>  */}
//                 {/* <i className="fas fa-door-open"></i> */}
//                 {/* <i className="fas fa-user-circle"></i> */}
//                 {/* <i className="fas fa-sign-in-alt"></i> */}
//                 {/* <i className="fas fa-user-times"></i> */}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="header-2">
//           <nav className="navbar">
//             <a href="#home">Home</a>
//             <a href="#featured">Featured</a>
//             <a href="#arrivals">Arrivals</a>
//             <a href="#reviews">Reviews</a>
//             <a href="#blogs">Contact</a>
//             <a href="#genre">Genre</a>
//           </nav>
//         </div>
//       </header>

//       <Login isActive={showLogin} onClose={closeForms} onSignupClick={handleSignupClick} />
//       <Signup isActive={showSignup} onClose={closeForms} onSignInClick={handleUserIconClick} />
//       <Cart isActive={showCart} onClose={closeForms} onCartClick={handleCartClick} />
//     </div>
//   );
// };

// export default Header;






// import React, { useState } from 'react';
// import axios from 'axios';
// import Login from './Login';
// import Signup from './Signup';
// import Cart from './Cart';

// const Header = ({ onSearch }) => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showCart, setShowCart] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   const handleUserIconClick = () => {
//     setShowLogin(true);
//     setShowSignup(false);
//   };

//   const handleCartClick = () => {
//     setShowCart(true);
//   };

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setShowLogin(false);
//   };

//   const closeForms = () => {
//     setShowLogin(false);
//     setShowSignup(false);
//     setShowCart(false);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/logout', {}, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       localStorage.removeItem('token');
//       alert('You have successfully logged out!'); // Alert on successful logout

//       setIsLoggedIn(false); // Update the login state
//     } catch (error) {
//       console.error('Logout failed:', error.response?.data?.message || 'Network error');
//     }
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     onSearch(query); 
//   };

//   return (
//     <div>
//       <header className="header">
//         <div className="header-1">
//           <a href="#" className="logo">
//             <i className="fas fa-book"></i> bookly
//           </a>

//           <form className="search-form" onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="search"
//               placeholder="Search books..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               id="search-swiper-slide"
//             />
//             <label htmlFor="search-swiper-slide" className="fas fa-search"></label>
//           </form>

//           <div className="icons">
//             <a href="#" className="fas fa-heart"></a>
//             <a href="#" className="fas fa-shopping-cart" onClick={handleCartClick}></a>
//             <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>

//             {isLoggedIn && (
//               <div className="user-icon">
//                 {/* <i className="fas fa-user-circle"></i>  */}
//                 <button onClick={handleLogout} className="logout-button">Logout</button>
               
//                </div>
//             )
//             }
//           </div>
//         </div>

//         <div className="header-2">
//           <nav className="navbar">
//             <a href="#home">Home</a>
//             <a href="#featured">Featured</a>
//             <a href="#arrivals">Arrivals</a>
//             <a href="#reviews">Reviews</a>
//             <a href="#blogs">Contact</a>
//             <a href="#genre">Genre</a>
//           </nav>
//         </div>
//       </header>

//       <Login isActive={showLogin} onClose={closeForms} onSignupClick={handleSignupClick} />
//       <Signup isActive={showSignup} onClose={closeForms} onSignInClick={handleUserIconClick} />
//       <Cart isActive={showCart} onClose={closeForms} onCartClick={handleCartClick} />
//     </div>
//   );
// };

// export default Header;





// import React, { useState } from 'react';
// import axios from 'axios';
// import Login from './Login';
// import Signup from './Signup';
// import Cart from './Cart';

// const Header = ({ onSearch }) => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showCart, setShowCart] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//   const handleUserIconClick = () => {
//     setShowLogin(true);
//     setShowSignup(false);
//   };

//   const handleCartClick = () => {
//     setShowCart(true);
//   };

//   const handleSignupClick = () => {
//     setShowSignup(true);
//     setShowLogin(false);
//   };

//   const closeForms = () => {
//     setShowLogin(false);
//     setShowSignup(false);
//     setShowCart(false);
//   };

//   const handleLogout = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/logout', {}, {
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
//       localStorage.removeItem('token');
//       alert('You have successfully logged out!'); // Alert on successful logout
//       setIsLoggedIn(false); // Update the login state
//     } catch (error) {
//       console.error('Logout failed:', error.response?.data?.message || 'Network error');
//     }
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     onSearch(query); 
//   };

//   return (
//     <div>
//       <header className="header">
//         <div className="header-1">
//           <a href="#" className="logo">
//             <i className="fas fa-book"></i> bookly
//           </a>

//           <form className="search-form" onSubmit={(e) => e.preventDefault()}>
//             <input
//               type="search"
//               placeholder="Search books..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               id="search-swiper-slide"
//             />
//             <label htmlFor="search-swiper-slide" className="fas fa-search"></label>
//           </form>

//           <div className="icons">
//             <a href="#" className="fas fa-heart"></a>
//             {isLoggedIn && ( // Show cart icon only if logged in
//               <a href="#" className="fas fa-shopping-cart" onClick={handleCartClick}></a>
//             )}
//             <div id="login-btn" className="fas fa-user" onClick={handleUserIconClick}></div>

//             {isLoggedIn && (
//               <div className="user-icon">
//                 <button onClick={handleLogout} className="logout-button">Logout</button>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="header-2">
//           <nav className="navbar">
//             <a href="#home">Home</a>
//             <a href="#featured">Featured</a>
//             <a href="#arrivals">Arrivals</a>
//             <a href="#reviews">Reviews</a>
//             <a href="#blogs">Contact</a>
//             <a href="#genre">Genre</a>
//           </nav>
//         </div>
//       </header>

//       <Login isActive={showLogin} onClose={closeForms} onSignupClick={handleSignupClick} />
//       <Signup isActive={showSignup} onClose={closeForms} onSignInClick={handleUserIconClick} />
//       <Cart isActive={showCart} onClose={closeForms} onCartClick={handleCartClick} />
//     </div>
//   );
// };

// export default Header;


