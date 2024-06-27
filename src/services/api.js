const api = {
    fetchJobs: () => {
      // Logic to fetch jobs from backend
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            { id: 1, title: 'Software Engineer', company: 'Tech Corp', location: 'San Francisco, CA', description: 'Responsible for developing, testing, and maintaining software applications.' },
            // other jobs
          ]);
        }, 1000);
      });
    },
    login: (credentials) => {
      // Logic to handle login
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000);
      });
    },
  };
  
  export default api;
  