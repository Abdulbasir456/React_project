import React  from 'react';
import './App.css';
import './components/chatBox.css';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ChatBox from './components/chatBox';
import AI from './components/AI';

function App() {
  return (
    <Router>
      <div className="App">

            <Routes>
              <Route path="/" element={<ChatBox />} />
              <Route path="/AI" element={<AI />} />
            </Routes>
          </div>
       
    </Router>
  );
}

export default App;
