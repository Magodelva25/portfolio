import React from 'react';
import ReactDOM from 'react-dom/client'
import './styles/App.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics/>
  </React.StrictMode>
);
