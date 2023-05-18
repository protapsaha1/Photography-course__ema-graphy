import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/route/Router.jsx'
import UserContext from './components/Hook/ContextProvider/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>,
)
