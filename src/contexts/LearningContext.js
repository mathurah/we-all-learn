import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
export const LearningContext = createContext();

const LearningContextProvider = props => {
  const [learns, setLearns] = useState(
    JSON.parse(localStorage.getItem("learns")), [
          { date: "May 29", description: "learned how to play the ukulele", id: 1 }
    ]

    // () => {
    //   //this whole function I don't think is being called bc it's not showing up in the console
    //   console.log("hi");
    //   const localData = localStorage.getItem('learns', JSON.parse(learns)); //I think there's a problem with this part
    //   return localData ? JSON.parse(localData) : [];
    // }
    // { date: "May 29", description: "learned how to play the ukulele", id: 1 }
    // { date: "May 21", description: "learned how to play the ukulele", id: 2 }
    // { date: "May 11", description: "learned how to play the ukulele", id: 3 }
  );

  useEffect(() => {
    localStorage.setItem("learns", JSON.stringify(learns));
    // console.log(JSON.parse(JSON.stringify(learns)));
    console.log(learns);
    console.log(localStorage.getItem("learns"));
    //console.log(localData) this does not work
  }, [learns]);

  const addLearn = (date, description) => {
    console.log(learns);
    setLearns(
      _.orderBy(
        [...learns, { date, description, id: uuidv4() }],
        ["date"],
        ["desc"]
      )
    );
  };

  const removeLearn = id => {
    setLearns(learns.filter(learn => learn.id !== id));
  };
  //so first you need to write a fucntion that checks ids and finds the index of the learn you wanna edit
  //then you just call useState with all the ... business and just edit the text
  //for that object at that index
  //THIS FILE just handles data changes not the visual presentation
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
  //for loop to find index -> put the value in a variable
  //setLearn call with the ... stuff to change the value

  return (
    <LearningContext.Provider
      value={{ learns, addLearn, removeLearn, editLearn }}
    >
      {props.children}
    </LearningContext.Provider>
  );
};
export default LearningContextProvider;
