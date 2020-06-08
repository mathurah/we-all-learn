import React, { useState, useContext } from "react";
import { LearningContext } from "../contexts/LearningContext";
const NewLearnForm = () => {
  const { addLearn } = useContext(LearningContext);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = e => {
    e.preventDefault(); //prevents page from being submitted
    addLearn(date, description);
    setDate("");
    setDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div class="col-3">
          <input
          type="date"
          placeholder="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
        </div>
        <div className="col-9">
          <textarea className="text_edit"
          name="textarea"
          rows="4"
          cols="5"
          placeholder="What I learned"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        </div>
      </div>
      
      

      {/* storing what the user enters in a local state */}
      {/* gets us the value inside the input form */}
      <input type="submit"  value="Add what I learned" />
    </form>
  );
};

export default NewLearnForm;
