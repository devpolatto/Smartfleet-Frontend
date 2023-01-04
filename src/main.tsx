import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { FineProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <FineProvider totalCount={0}>
        <App />
      </FineProvider>
    </BrowserRouter>
  </React.StrictMode>
)
