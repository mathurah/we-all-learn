import React, {useContext } from "react";
import "../index.css";
import { LearningContext } from "../contexts/LearningContext";
import LearnDetails from "./LearnDetails";

const LearningList = (props) => {
  const { learns } = useContext(LearningContext);
  return (
    <div>
      <ul>
        {learns?.map((learn) => {
          return <LearnDetails learn={learn} key={learn.id} />;
        })}
      </ul>
    </div>
  );
};

export default LearningList;
