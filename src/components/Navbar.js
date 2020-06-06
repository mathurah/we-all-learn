import React, {Component, useContext} from 'react';
import { LearningContext } from '../contexts/LearningContext';

const Navbar = () => {

    const {learns} = useContext(LearningContext); 
    return (
            <div>
                <p>You've been learning {learns.length} things!</p>
            </div>
        
        );
    }

export default Navbar; 