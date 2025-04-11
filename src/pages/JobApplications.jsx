import React from 'react';
import JobList from '../components/jobs/JobList';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const JobApplications = () => {
  return (
    <div className="page-container">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <JobList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobApplications;