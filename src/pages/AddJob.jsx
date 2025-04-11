import React from 'react';
import AddJobForm from '../components/jobs/AddJobForm';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const AddJob = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <AddJobForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddJob;