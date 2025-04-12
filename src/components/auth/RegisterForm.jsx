import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser,clearError } from '../../state/slices/authSlice';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, error } = useSelector(state => state.auth);
  
  

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/applications');
    }
    return () => {
      dispatch(clearError());
    };
  }, [isAuthenticated, navigate, dispatch]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(formData));
  };
  
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
             className="form-control"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
             className="form-control"
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;