import React from 'react';
import './App.css';
import './Layout.css';
import {
  BrowserRouter as Router} from "react-router-dom";

import Dashboard from './features/Dashboard';


function App() {
  return (
    <Router> 
       <Dashboard />
    </Router>
  );
}

export default App;
