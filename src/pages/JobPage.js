import React from 'react';
import JobDetail from '../components/JobDetail';

const JobPage = ({ match }) => {
  return (
    <div>
      <JobDetail match={match} />
    </div>
  );
};

export default JobPage;
