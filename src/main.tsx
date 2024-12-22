import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
    <h1 className="text-6xl">Hola Mundo</h1>
  </React.StrictMode>
)

