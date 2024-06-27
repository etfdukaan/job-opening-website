import React from 'react';
import dummyJobs from '../dummyJobs';

const JobList = () => {
  return (
    <div>
      {dummyJobs.map(job => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
