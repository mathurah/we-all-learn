import React, { useState, useContext } from "react";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import ReactQuill from "react-quill"; // Import React-Quill component
import { LearningContext } from "../contexts/LearningContext";
import { useNavigate } from "react-router-dom";

const NewLearnForm = () => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { addLearn } = useContext(LearningContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLearn(date, description);
    setDate("");
    setDescription("");
    navigate("/");

    // Add your logic to handle form submission
    // e.g., send the data to the server, save it in the database, etc.
  };

  const handleQuillChange = (content, delta, source, editor) => {
    setDescription(content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-3">
          <input
            type="date"
            placeholder="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="col-9">
          {/* Replace textarea with ReactQuill */}
          <ReactQuill
            value={description}
            onChange={handleQuillChange} // Use the correct event handler
            placeholder="What I learned"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
              ],
            }}
            formats={[
              "header",
              "bold",
              "italic",
              "underline",
              "strike",
              "blockquote",
              "list",
              "bullet",
              "link",
              "image",
            ]}
          />
        </div>
      </div>

      <input type="submit" value="Add what I learned" />
    </form>
  );
};

export default NewLearnForm;
