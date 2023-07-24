import React, { useContext } from "react";
import { LearningContext } from "../contexts/LearningContext";

const Navbar = () => {
  const { learns } = useContext(LearningContext);
  return (
    <div className="container mt-5">
      <div className="row">
        <span className="heart-falling">&#10084;</span>
        <span className="heart-falling">&#10084;</span>
        <span className="heart-falling">&#10084;</span>
        <span className="heart-falling">&#10084;</span>
      </div>
      <div className="row">
        <div className="col">
          <h1>mathu's daily logs</h1>
        </div>
      </div>
      <div className="row header">
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Navbar;
