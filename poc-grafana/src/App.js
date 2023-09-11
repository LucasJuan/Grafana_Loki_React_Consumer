import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import ReRoutes from './routes';

function App() {
  return (
    <BrowserRouter >
      <ReRoutes />
    </BrowserRouter>
  );
}

export default App;