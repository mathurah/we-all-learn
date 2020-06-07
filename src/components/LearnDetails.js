import React, { useContext, useState } from "react";
import { LearningContext } from "../contexts/LearningContext";
import { AppProvider, Card } from "@shopify/polaris";

// need access to learn inside this component
const LearnDetails = ({ learn }) => {
  const { removeLearn, editLearn } = useContext(LearningContext);
  const [edit, setEdit] = useState(false);
  const [description, setDescription] = useState(learn.description);
  //Function to render a Text field when editing
  const renderTextField = () => {
    return (
      <textarea className="text-edit"
        name="textarea"
        rows="4"
        cols="5"
        placeholder="what you learned"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
    );
  };

  return (
    <div className="container mt-5">
    <AppProvider>
      <div class="learning-cards">
        <Card
          title={learn.date}
          secondaryFooterActions={[
            {
              content: "Delete Entry",
              destructive: true,
              onAction: () => removeLearn(learn.id)
            }
          ]}
          primaryFooterAction={
            !edit
              ? {
                  content: "Change what you learned",
                  onAction: () => {
                    setEdit(true);
                  }
                }
              : {
                  content: "Save changes",
                  onAction: () => {
                    editLearn(learn.id, description);
                    setEdit(false);
                  }
                }
          }
        >
          <Card.Section>
            {!edit ? learn.description : renderTextField()}
          </Card.Section>
        </Card>
      </div>
    </AppProvider>
    </div>
  );
};

export default LearnDetails;
