import React from 'react';
import Job from './Job';
import './JobList.css';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Company A', location: 'New York, NY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, title: 'Backend Developer', company: 'Company B', location: 'San Francisco, CA', description: 'Pellentesque in ipsum id orci porta dapibus.' },
  { id: 3, title: 'Full Stack Developer', company: 'Company C', location: 'Austin, TX', description: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.' },
];

function JobList() {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
