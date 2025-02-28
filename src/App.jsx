import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import AddBook from "./AddBook";
import './App.css'; // Import global styles

function App() {
  return (
    <Router> {/* Wrap everything in BrowserRouter */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
