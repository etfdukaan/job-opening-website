import React from 'react';
import dummyJobs from '../dummyJobs';

const JobList = () => {
  return (
    <div>
      <h1>Job Openings</h1>
      {dummyJobs.map((job) => (
        <div key={job.id} className="job-list-item">
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p>{job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
