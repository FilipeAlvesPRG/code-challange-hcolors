import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PaintProvider } from './context/resultContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PaintProvider>
      <App />
    </PaintProvider>
  </React.StrictMode>
);
