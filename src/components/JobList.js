import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Job Openings</h1>
      <div className="list-group">
        {jobs.map((job) => (
          <div key={job.id} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{job.title}</h5>
              <small>{job.location}</small>
            </div>
            <p className="mb-1">{job.description}</p>
            <small>{job.company}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
