import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';  // Make sure LanguageProvider is imported

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>  {/* Wrap your App with LanguageProvider */}
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);