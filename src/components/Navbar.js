import React, {Component, useContext} from 'react';
import { LearningContext } from '../contexts/LearningContext';

const Navbar = () => {

    const {learns} = useContext(LearningContext); 
    return (
            <div>
                <p>You have {learns.length} learns to get through...</p>
            </div>
        
        );
    }

export default Navbar; 