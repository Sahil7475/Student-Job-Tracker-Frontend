import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/auth/RegisterForm';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Register = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="auth-page">
          <RegisterForm />
          <p className="auth-redirect">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;