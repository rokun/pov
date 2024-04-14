import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import SubPage1 from './component/SubPage1';
import SubPage2 from './component/SubPage2';

function App() {
    return (
        <Router basename="/pov">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/subpage1" element={<SubPage1 />} />
                <Route path="/subpage2" element={<SubPage2 />} />
                {/* Catch-all route for any undefined paths */}
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
