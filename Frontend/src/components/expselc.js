import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExpSelc = () => {
  const navigate = useNavigate();

  // Function to navigate to the Exp.js page
  const handleNavigation = () => {
    navigate('/exp');  // Navigate to the Exp.js page
  };

  return (
    <div className="exp-selc-container">
      <h2>Select an Experiment</h2>
      <div className="experiment-buttons">
        {/* Buttons for each experiment */}
        <button onClick={handleNavigation}>Experiment 1</button>
        <button onClick={handleNavigation}>Experiment 2</button>
        <button onClick={handleNavigation}>Experiment 3</button>
        <button onClick={handleNavigation}>Experiment 4</button>
        <button onClick={handleNavigation}>Experiment 5</button>
      </div>
    </div>
  );
};

export default ExpSelc;
