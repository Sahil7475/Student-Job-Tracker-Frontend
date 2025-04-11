import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../state/slices/jobSlice';
import JobCard from './JobCard';
import StatusFilter from './StatusFilter';
import { Link } from 'react-router-dom';

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, error, filters } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs(filters));
  }, [dispatch, filters]);

  return (
    <div className="job-list-container">
      <div className="list-header">
        <h2>List All Applications</h2>
        <Link to="/add" className="btn btn-primary">
          Add New Application
        </Link>
      </div>

      <StatusFilter />

      {isLoading ? (
        <div className="loading">Loading job applications...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="job-list">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobCard key={job._id} job={job} />)
          ) : (
            <div className="no-jobs-message">
              <h3>No job applications found</h3>
              <p>Start tracking your job search by adding your first application.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobList;
