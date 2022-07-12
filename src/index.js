import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Preview from './pages/Preview';
import FormProvider from './context/useFormContext';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
        <Footer />
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
