import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="test">
      <Suspense fallback="Loading...">
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
