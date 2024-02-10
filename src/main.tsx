import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
