import React, {useState, useContext} from 'react';
import "../index.css"; 
import { LearningContext } from '../contexts/LearningContext';
import LearnDetails from './LearnDetails';
// import NewLearnForm from './NewLearnForm';

const LearningList = () => {
    const {learns} = useContext(LearningContext); 

    return learns.length ? (
        <div>
        <ul>
        { learns.map(learn => {
            return (<LearnDetails learn={learn} key={learn.id}/> );
            })}
            </ul>
            </div>

    ):(
        <div className="empty"> Start learning today! </div>
    )
    
}
 
export default LearningList;