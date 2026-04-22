import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { SubjectContextProvider } from './context/subjectContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SubjectContextProvider>
        <App />
      </SubjectContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
