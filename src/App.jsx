import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes, routes } from './routes/routes';
import { Routes } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
