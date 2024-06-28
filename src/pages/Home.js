import React, { useState } from 'react';
import JobList from '../components/JobList';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import dummyJobs from '../dummyJobs';

const Home = () => {
  const [jobs, setJobs] = useState(dummyJobs);
  const [filters, setFilters] = useState({ 
    locations: ['San Francisco, CA', 'New York, NY', 'Remote', 'Austin, TX', 'Los Angeles, CA', 'Chicago, IL', 'Seattle, WA', 'Denver, CO', 'Miami, FL'], 
    jobTypes: ['Full-time', 'Part-time', 'Contract'] 
  });

  const handleSearch = (query) => {
    // Implement search functionality
  };

  const handleFilterChange = (name, value) => {
    // Implement filter functionality
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;
