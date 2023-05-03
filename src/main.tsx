import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig
        value={{
          shouldRetryOnError: false,
          revalidateOnFocus: false
        }}
      > 
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>
);
