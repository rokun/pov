import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import SubPage1 from './component/SubPage1';
import SubPage2 from './component/SubPage2';
import NotFound from './component/NotFound'; // Import the NotFound component

function App() {
    return (
        <Router basename="/pov">Hack Start
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/subpage1" element={<SubPage1 />} />
                <Route path="/subpage2" element={<SubPage2 />} />
                <Route path="*" element={<NotFound />} /> // Use the NotFound component
            </Routes>
        </Router>
    );
}

export default App;
