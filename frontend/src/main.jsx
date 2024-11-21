import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import UserDashboard from './components/UserDashboard/UserDashboard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {

        path: 'login',
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
    ]
  },
  {
    path: "user/:userId",
    element: <UserDashboard />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
