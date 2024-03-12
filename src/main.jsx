import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from './context/modal.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>
);
