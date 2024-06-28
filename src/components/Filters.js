import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div className="mb-4">
      <h5>Filter by Location</h5>
      <select className="form-control mb-3" onChange={(e) => onFilterChange('location', e.target.value)}>
        {filters.locations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
      <h5>Filter by Job Type</h5>
      <select className="form-control" onChange={(e) => onFilterChange('jobType', e.target.value)}>
        {filters.jobTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
