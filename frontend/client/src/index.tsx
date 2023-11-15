import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserDataContextProvider } from './context/UserDataContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserDataContextProvider>
      <App />
    </UserDataContextProvider>
  </React.StrictMode>
);

