import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Login = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="auth-page">
          <LoginForm />
          <p className="auth-redirect">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;