import React from 'react';
import './Job.css';

function Job({ job }) {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default Job;
