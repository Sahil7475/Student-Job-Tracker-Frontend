import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateJobStatus, deleteJob } from '../../state/slices/jobSlice';

const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(job.status);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      dispatch(deleteJob(job._id));
    }
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  const handleStatusUpdate = () => {
    if (selectedStatus && selectedStatus !== job.status) {
      dispatch(updateJobStatus({ jobId: job._id, status: selectedStatus }));
    }
    setModalOpen(false);
  };

  return (
    <>
      <div className="job-card">
        <h3>{job.role} at {job.company}</h3>
        <div className="job-details">
          <p className="status">Status: {job.status}</p>
          <p className="date">
            Date: {new Date(job.applicationDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          {job.link && (
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="job-link"
            >
              View Job Posting
            </a>
          )}
        </div>
        <div className="job-actions">
          <button onClick={() => setModalOpen(true)} className="btn btn-primary">
            Update Status
          </button>
          <button onClick={handleDelete} className="btn btn-outline">
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Update Status</h3>
            <p><strong>{job.role}</strong> at <strong>{job.company}</strong></p>
            <label htmlFor="status-select">Status:</label>
            <select
              id="status-select"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              {['Applied', 'Interview', 'Offer', 'Rejected'].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={handleStatusUpdate}>
                Save
              </button>
              <button className="btn btn-outline" onClick={() => setModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobCard;
