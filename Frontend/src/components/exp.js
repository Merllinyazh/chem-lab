
import React from "react";
import { useNavigate } from "react-router-dom";

const Exp = () => {
  const navigate = useNavigate();

  const goToPractice = () => {
    navigate('/stimul'); // Navigate to Stimul.js
  };

  const goToQuiz = () => {
    navigate('/quiz'); // Navigate to Quiz.js
  };

  return (
    <div className="exp-container">
      <div className="video-container">
        <video width="400" height="300" controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="description-container">
        <p>
          This is the experiment description. Add your content here. It can be
          quite long, so it will be scrollable. Scroll through it to learn more
          about the experiment. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla interdum justo sit amet ante suscipit, vitae tristique nisl
          ultricies. Phasellus sed tortor ligula. Proin scelerisque, lorem sed
          pellentesque hendrerit, leo velit sollicitudin libero, sit amet pharetra
          mauris justo nec leo. Fusce pretium, odio a luctus gravida, metus eros
          ullamcorper risus, ut elementum tortor purus eget velit. Ut eu eros
          euismod, facilisis felis et, hendrerit nisi.
        </p>
        <p>
          More text here... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla interdum justo sit amet ante suscipit, vitae tristique nisl ultricies.
        </p>
      </div>
      <div className="experiment-buttons">
        <button onClick={goToPractice}>Practice</button>
        <button onClick={goToQuiz}>Quiz</button>
      </div>
    </div>
  );
};

export default Exp;
