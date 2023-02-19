import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/home'
import Layout from './pages/layout/Layout'

import './_app.scss'
import { Dashboard } from './pages/adminDashboard'
import AuthContext from './contexts/authContext'
import { AdminLogin } from './pages/adminLogin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout components={<HomePage />} />,
    errorElement: (
      <div>
        <h1>PAGE 404</h1>
      </div>
    ),
  },
  {
    path: '/dashboard',
    element: <Layout components={<Dashboard />} />,
  },
  {
    path: '/login/admin',
    element: <Layout components={<AdminLogin />} />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
)
