import React from 'react';
import JobList from './components/JobList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Openings</h1>
      </header>
      <JobList />
    </div>
  );
}

export default App;
