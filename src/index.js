import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./styles/index.css"
import "./styles/Header.css"
import "./styles/Footer.css"
import "./styles/Note.css"



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


