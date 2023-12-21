// App.js
import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import ViewmodeModal from './components/ViewmodeModal';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StockDetailPage from './pages/StockDetailPage';

function App() {
  const [viewmode, setViewmode] = useState(0);
  const [viewmodeVisible, setViewmodeVisible] = useState(false);

  var handleVisible = () => {
    setViewmodeVisible(!viewmodeVisible);
  }

  var handleViewmode = () => {
    if (viewmode === 0)
      setViewmode(1);
    else
      setViewmode(0);
  }

  return (
    <Router>
      <div className="App">
        <TopBar handleClick={handleVisible} viewmode={viewmode}></TopBar>
        <div className="app-viewmode-modal" style={{display: viewmodeVisible ? "block" : "none"}}>
          <ViewmodeModal handleClick={handleViewmode} viewmode={viewmode}></ViewmodeModal>
        </div>
        <div className='app-main-page'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/stocks/:stockId" element={<StockDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
