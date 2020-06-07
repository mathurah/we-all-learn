import React, {Component, useContext} from 'react';
import { LearningContext } from '../contexts/LearningContext';

const Navbar = () => {

    const {learns} = useContext(LearningContext); 
    return (
        <div className="container mt-5">
          <div className="row text-center">
            <span className="heart-falling">&#10084;</span>
            <span className="heart-falling">&#10084;</span>
            <span className="heart-falling">&#10084;</span>
            <span className="heart-falling">&#10084;</span>
            <span className="heart-falling">&#10084;</span>
            </div>
          <div className="row">
            <div className="col">
            {learns?.length > 0 && 
                <h2>I learned {learns?.length} things...</h2>
            }
            {learns?.length <= 0  && 
                <h2>Start learning new things!</h2>
            }
            </div>
          </div>
          <div className="row info">
            <div className="col">
              <p>Not every day needs to be productive or involve shipping code. But every day is about learning something new whether it be about technology, life lessons, and the why - why we do the things we do. Life is short.</p>
            </div>
          </div>
          </div>
        );
    }

export default Navbar; 