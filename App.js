import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login'; // Ensure this path is correct
import Profile from './profile'; // Ensure this path is correct

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                {/* Add other routes here */}
                <Route path="/" element={<Login />} /> {/* Default route */}
            </Routes>
        </Router>
    );
};

export default App;
