import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Get from './get.jsx'
import NotFoundPage from './404.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:id" element={<Get id="id"/>}/>
          <Route path="/404" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
