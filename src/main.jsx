import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext.jsx';
import { ScrollToTop } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} position={'bottom-right'} />
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>,
);
