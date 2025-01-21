
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // React Router v6+

const Login = ({ isActive, onClose, onSignupClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Both fields are required");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:8001/api/login', {
        email,
        password,
        rememberMe
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const token = response.data.token; 
        localStorage.setItem('token', token);
        alert('Login successful!'); 
        onClose(); 
        navigate('/'); 
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Network error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`login-form-container ${isActive ? "active" : ""}`}>
      <div id="close-login-btn" className="fas fa-times" onClick={onClose}></div>

      <form onSubmit={handleSubmit}>
        <h3>Sign in on Jodri's store</h3>
        <span>Username</span>
        <input
          type="email"
          className="box"
          placeholder="Enter your email"
          id="loginemail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Password</span>
        <input
          type="password"
          className="box"
          placeholder="Enter your password"
          id="loginpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="checkbox">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input type="submit" value="Sign in" className="btn" id="loginbtn" />
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <p>
          Forget password? <a href="#">Click here</a>
        </p>
        <p>
          Don't have an account?{" "}
          <a href="#" id="signup" onClick={onSignupClick}>
            Create one
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;



















// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // React Router v6+

// const Login = ({ isActive, onClose, onSignupClick }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate(); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       setError("Both fields are required");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await axios.post('http://localhost:8001/api/login', {
//         email,
//         password,
//         rememberMe
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.status === 200) {
//         const token = response.data.token; 
//         localStorage.setItem('token', token);
//         setSuccess('Login successful!');
//         onClose(); 
//         navigate('/'); 
//       } else {
//         setError(response.data.message || 'Login failed');
//       }
//     } catch (error) {
//       setError(error.response?.data?.message || 'Network error');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className={`login-form-container ${isActive ? "active" : ""}`}>
//       <div id="close-login-btn" className="fas fa-times" onClick={onClose}></div>

//       <form onSubmit={handleSubmit}>
//         <h3>Sign in on Jodri's store</h3>
//         <span>Username</span>
//         <input
//           type="email"
//           className="box"
//           placeholder="Enter your email"
//           id="loginemail"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <span>Password</span>
//         <input
//           type="password"
//           className="box"
//           placeholder="Enter your password"
//           id="loginpassword"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <div className="checkbox">
//           <input
//             type="checkbox"
//             id="remember-me"
//             checked={rememberMe}
//             onChange={(e) => setRememberMe(e.target.checked)}
//           />
//           <label htmlFor="remember-me">Remember me</label>
//         </div>
//         <input type="submit" value="Sign in" className="btn" id="loginbtn" />
//         {isLoading && <p>Loading...</p>}
//         {error && <p className="error">{error}</p>}
//         {success && <p className="success">{success}</p>}
//         <p>
//           Forget password? <a href="#">Click here</a>
//         </p>
//         <p>
//           Don't have an account?{" "}
//           <a href="#" id="signup" onClick={onSignupClick}>
//             Create one
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;




