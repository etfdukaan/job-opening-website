import React, { useState } from 'react';

const AdminPanel = () => {
  const [job, setJob] = useState({ title: '', company: '', location: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add job
    console.log('Job added:', job);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={job.title} onChange={handleChange} placeholder="Job Title" />
        <input name="company" value={job.company} onChange={handleChange} placeholder="Company" />
        <input name="location" value={job.location} onChange={handleChange} placeholder="Location" />
        <textarea name="description" value={job.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AdminPanel;
