import React, {createContext, useState} from 'react'; 
import { v4 as uuidv4 } from 'uuid';
export const LearningContext = createContext(); 

const LearningContextProvider =(props) => {

    const [learns, setLearns] = useState([
        {date: 'May 20', description: 'learned how to play the ukulele', id: 1},
        {date: 'May 21', description: 'learned how to play the ukulele', id: 2},
        {date: 'May 21', description: 'learned how to play the ukulele', id: 3}
    ]);


    const addLearn = (date, description) => {
        setLearns([...learns, {date, description, id: uuidv4}])
    }
  

    const removeLearn = (id) => {
        setLearns(learns.filter(learn => learn.id !==id))
    }

    return (
        <LearningContext.Provider value={{learns, addLearn, removeLearn}}>
        {props.children}
        </LearningContext.Provider>
    )

}

export default LearningContextProvider;