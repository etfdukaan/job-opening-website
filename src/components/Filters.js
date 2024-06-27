import React from 'react';

const Filters = ({ filters, onFilterChange }) => {
  return (
    <div>
      <h3>Filters</h3>
      <div>
        <h4>Locations</h4>
        {filters.locations.map(location => (
          <div key={location}>
            <input 
              type="checkbox" 
              value={location} 
              onChange={(e) => onFilterChange('location', e.target.value)}
            />
            {location}
          </div>
        ))}
      </div>
      <div>
        <h4>Job Types</h4>
        {filters.jobTypes.map(type => (
          <div key={type}>
            <input 
              type="checkbox" 
              value={type} 
              onChange={(e) => onFilterChange('jobType', e.target.value)}
            />
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
