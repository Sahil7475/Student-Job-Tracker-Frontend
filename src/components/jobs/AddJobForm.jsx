import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addJob } from '../../state/slices/jobSlice';

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    status: 'Applied',
    applicationDate: '',
    link: '',
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector(state => state.jobs);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addJob(formData))
      .unwrap()
      .then(() => {
        navigate('/applications');
      })
      .catch((error) => {
        console.error('Failed to add job:', error);
      });
  };
  
  return (
    <div className="add-job-container">
      <h2>Add Job Application</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        
        <div className="form-group status-group">
          <label>Status</label>
          <div className="status-options">
            {['Applied', 'Interview', 'Offer', 'Rejected'].map(option => (
              <label key={option} className="status-option">
                <input
                  type="radio"
                  name="status"
                  value={option}
                  checked={formData.status === option}
                  onChange={handleChange}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="form-group">
        <input
  type="date"
  name="applicationDate"
  value={formData.applicationDate}
  onChange={handleChange}
  required
  className="form-control"
/>

        </div>
        
        <div className="form-group">
          <input
            type="url"
            name="link"
            placeholder="Link"
            value={formData.link}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Application'}
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;