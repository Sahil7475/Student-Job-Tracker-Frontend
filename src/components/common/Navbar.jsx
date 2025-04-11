import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../state/slices/authSlice';

const Navbar = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="icon">🏫</span>
          <span className="brand-name">Student Job Tracker</span>
        </Link>
      </div>
      <div className="navbar-actions">
        {isAuthenticated ? (
          <>
            <button className="btn btn-link" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn btn-primary">Register</Link>
            <Link to="/login" className="btn btn-outline">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;