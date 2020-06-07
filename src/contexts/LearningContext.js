import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
export const LearningContext = createContext();

//This file manages all the data 
const LearningContextProvider = props => {
  const [learns, setLearns] = useState(
    //Retrieving from storage and storing as an object
    JSON.parse(localStorage.getItem("learns")), [
    ]
    // { date: "May 29", description: "learned how to play the ukulele", id: 1 }
    // { date: "May 11", description: "learned how to play the ukulele", id: 3 }
  );

  useEffect(() => {
    //updating the state
    //storing the local storage, serializing with the json
    localStorage.setItem("learns", JSON.stringify(learns));
  }, [learns]);

  //Function to add learns
  const addLearn = (date, description) => {
    setLearns(
      _.orderBy(
        [...learns, { date, description, id: uuidv4() }],
        ["date"],
        ["desc"]
      )
    );
  };

  //Looping through the array and excluding the id that you deleted, and later updating the state
  const removeLearn = id => {
    setLearns(learns.filter(learn => learn.id !== id));
  };

  //1. Check ids and find the index of the item you want to edit
  //2. create a new temporary variable of newLearns and new description 
  //3. Replace and connect to original
  //4. Set item to update in local storage
  const editLearn = (id, newText) => {
    let newLearns = learns;

    for (let i = 0; i < learns.length; i++) {
      if (learns[i].id === id) {
        newLearns[i].description = newText;
        setLearns(newLearns);
        localStorage.setItem("learns", JSON.stringify(newLearns));
      }
    }
  };


  return (
    <LearningContext.Provider
      value={{ learns, addLearn, removeLearn, editLearn }}
    >
      {props.children}
    </LearningContext.Provider>
  );
};
export default LearningContextProvider;

//Provider: provides values and passing everything down