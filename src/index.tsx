import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import App from './02-class+ts/01-state';
// import App from './02-class+ts/02-todolist';
// import App from './03-function+ts/01-state';
import App from './03-function+ts/02-todo';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
