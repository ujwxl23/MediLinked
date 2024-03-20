import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThirdwebProvider } from "@thirdweb-dev/react";
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider activeChain="mumbai" clientId="640a6e8cb3c1ae41951371447563715c">
      <App />
      <ToastContainer />
    </ThirdwebProvider>
  </React.StrictMode>,
)
