import React from 'react';
import './App.css';
import './Layout.css';
  
import AppRoutes from './AppRoutes';
import AppProvider from './AppContext';


function App() { 
  return ( 
      <AppProvider>
          <AppRoutes />
      </AppProvider> 
  );
}

export default App;
