import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MandapPage from './Pages/MandapPage/MandapPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mandapphotos" element={<MandapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
