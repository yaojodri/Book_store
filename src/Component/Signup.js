import React from "react";
import CustomerInfo from "./CustomerInfo";

const Signup = ({ isActive, onClose, onSignInClick, onSubmit }) => {
  const [signupData, setSignupData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [submittedData, setSubmittedData] = React.useState(null);
  const [error, setError] = React.useState("");
  const [showCustomerInfo, setShowCustomerInfo] = React.useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setSignupData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitForm(event) {
    event.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");

    setSubmittedData({
      email: signupData.email,
      password: signupData.password,
    });

    setShowCustomerInfo(true);
  }

  const handleCustomerInfoSuccess = () => {
    setShowCustomerInfo(false);
    onSignInClick(); 
  };

  return (
    <div className={`signup-form-container ${isActive ? "active" : ""}`}>
      <div id="close-signup-btn" className="fas fa-times" onClick={onClose}></div>
      <form onSubmit={submitForm}>
        <h3>Register on Jodri's store</h3>
        <span>Email</span>
        <input
          type="email"
          className="box"
          placeholder="enter your email"
          id="email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
        />
        <span>Password</span>
        <input
          type="password"
          className="box"
          placeholder="enter your password"
          id="password"
          name="password"
          value={signupData.password}
          onChange={handleChange}
        />
        <span>Confirm Password</span>
        <input
          type="password"
          className="box"
          placeholder="confirm your password"
          id="confirmPassword"
          name="confirmPassword"
          value={signupData.confirmPassword}
          onChange={handleChange}
        />
        {error && <p className="error-message">{error}</p>}
        <div className="checkbox">
          <input
            type="checkbox"
            id="remember-me2"
            name="rememberMe"
            checked={signupData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="remember-me2"> Remember me </label>
        </div>
        <p>
          I do have an account?{" "}
          <a href="#" id="signin" onClick={onSignInClick}>
            click here
          </a>
        </p>
        <input type="submit" value="Sign up" className="btn" id="signupbtn" />
      </form>

      {showCustomerInfo && submittedData && (
        <CustomerInfo 
          isActive={showCustomerInfo} 
          onClose={handleCustomerInfoSuccess}  // Pass success callback
          signupData={submittedData} // Pass signupData as prop
          onSuccess={handleCustomerInfoSuccess} // Pass success callback
        />
      )}
    </div>
  );
};

export default Signup;



