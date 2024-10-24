// src/App.js
import React from 'react';
import CropForm from './componenets/CropForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecommendCrop from './pages/RecommendCrop';

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CropForm />} />
          <Route path="/recommend-crop" element={<RecommendCrop />} />
        </Routes>
      </Router>
    );
  };
  

export default App;
