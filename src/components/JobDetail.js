import React from 'react';
import dummyJobs from '../dummyJobs';

const JobDetail = ({ match }) => {
  const job = dummyJobs.find(job => job.id === parseInt(match.params.id, 10));

  if (!job) return <div>Job not found</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobDetail;
