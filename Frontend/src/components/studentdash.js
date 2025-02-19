import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const StudentDash = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    
    if (!userData) {
      navigate('/login');  // Redirect to login if not authenticated
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const goToExperiments = () => {
    navigate('/expselc');  // Navigate to the experiments selection page
  };

  return (
    <div className="student-dash-container">
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <p>Your student dashboard</p>
          {/* Add more dashboard content here */}
          
          {/* Button to go to the experiments page */}
          <button onClick={goToExperiments}>
            Go to Experiments
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StudentDash;
