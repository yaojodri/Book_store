import React, { useState } from 'react';
import axios from 'axios';

const CustomerInfo = ({ isActive, onClose, signupData, onSuccess }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      ...signupData,
      firstname,
      lastname,
      address,
      phonenumber,
    };

    if (!firstname || !lastname || !address || !phonenumber) {
      setError('All fields are required');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:8001/api/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setSuccess('Data submitted successfully!');
        onSuccess(); 
        setFirstname('');
        setLastname('');
        setAddress('');
        setPhonenumber('');
      } else {
        setError(response.data.message || 'Submission failed');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Network error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`signup-form-container ${isActive ? 'active' : ''}`}>
      <div id="close-signup-btn" className="fas fa-times" onClick={onClose}></div>

      <form onSubmit={handleSubmit}>
        <h3>Customer Info Here</h3>
        <span>First Name</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your first name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <span>Last Name</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <span>Address</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <span>Phone Number</span>
        <input
          type="text"
          className="box"
          placeholder="Enter your phone number"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <input type="submit" value="Submit" className="btn" id="signupbtn" />
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default CustomerInfo;


