import React, {useState} from 'react';
import Navbar from './components/Navbar';
import LearningList from './components/LearningList';
import '@shopify/polaris/styles.css';
import './index.css'; 
import LearningContextProvider from './contexts/LearningContext';
import NewLearnForm from './components/NewLearnForm';

function App() {
  return (
    <div className="App">
    <LearningContextProvider>
    <Navbar/>
    <NewLearnForm/>

    <LearningList/>

    </LearningContextProvider>
    </div>
  );
}

export default App;
