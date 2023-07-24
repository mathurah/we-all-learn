import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LearningList from "./components/LearningList";
import "bootstrap/dist/css/bootstrap.min.css";
import "@shopify/polaris/styles.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LearningContextProvider from "./contexts/LearningContext";
import Home from "./Home";
import NewLogPage from "./components/NewLogPage";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <LearningContextProvider>
          <Navbar />
          <Router>
            <Routes>
              <Route path="/new" element={<NewLogPage />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </LearningContextProvider>
      </div>
    </div>
  );
}

export default App;
