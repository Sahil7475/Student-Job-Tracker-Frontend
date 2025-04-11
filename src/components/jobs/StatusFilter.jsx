import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter,clearFilters } from '../../state/slices/jobSlice';
import { useSelector } from 'react-redux';


const StatusFilter = () => {
  const [date, setDate] = useState('');
  const { status: activeStatus } = useSelector(state => state.jobs.filters);

  const dispatch = useDispatch();
  
  const handleStatusFilter = (status) => {
    dispatch(setFilter({ status }));
  };
  
  const handleDateFilter = (e) => {
    e.preventDefault();
    if (date) {
      dispatch(setFilter({ date }));
    }
  };
  
  const handleClearFilters = () => {
    setDate('');
    dispatch(clearFilters());
  };
  
  return (
    <div className="filter-container">
      <div className="status-filter">
      <button 
  className={`btn btn-filter ${!activeStatus ? 'active-filter' : ''}`}
  onClick={() => handleStatusFilter('')}
>
  All
</button>

        {['Applied', 'Interview', 'Offer', 'Rejected'].map(status => (
  <button
    key={status}
    className={`btn btn-filter ${activeStatus === status ? 'active-filter' : ''}`}
    onClick={() => handleStatusFilter(status)}
  >
    {status}
  </button>
))}

      
    </div>
    
    <div className="date-filter">
      <form onSubmit={handleDateFilter} className="date-filter-form">
      <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  className="date-input"
/>

        <button type="submit" className="btn btn-filter">Filter by Date</button>
      </form>
      
      <button 
        onClick={handleClearFilters}
        className="btn btn-clear"
      >
        Clear Filters
      </button>
    </div>
  </div>
);
};

export default StatusFilter;