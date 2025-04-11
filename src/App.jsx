import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';

import Login from './pages/Login';
import Register from './pages/Register';
import AddJob from './pages/AddJob';
import JobApplications from './pages/JobApplications';
import ProtectedRoute from './components/common/ProtectedRoute';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/add" element={<AddJob />} />
            <Route path="/applications" element={<JobApplications />} />
          </Route>
          
          {/* Redirect root to applications or login */}
          <Route path="/" element={<Navigate to="/applications" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;