import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome";   
import Signup from "./components/signup";     
import Login from "./components/login";       
import StudentDash from "./components/studentdash";  
import ExpSelc from "./components/expselc";  
import Exp from "./components/exp";           
import Stimul from "./components/stimul";     
import Quiz from "./components/quiz";         

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/studentdash" element={<StudentDash />} />
        <Route path="/expselc" element={<ExpSelc />} />
        <Route path="/exp" element={<Exp />} />
        <Route path="/stimul" element={<Stimul />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
