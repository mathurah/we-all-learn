import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LearningList from "./components/LearningList";
import "bootstrap/dist/css/bootstrap.min.css";
import "@shopify/polaris/styles.css";
import "./index.css";
import LearningContextProvider from "./contexts/LearningContext";
import NewLearnForm from "./components/NewLearnForm";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <LearningContextProvider>
          <Navbar />
          <NewLearnForm />
          <LearningList />
        </LearningContextProvider>
      </div>
    </div>
  );
}

export default App;
